import React, { useState } from 'react'
import '../Styles/Signup.css'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Signup = () => {
  //firstname, lastname, email , password, gender 
  
  const [loading,setLoading] = useState(false)
  const [newUser,setNewUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: '',
    gender: 'male'
})
  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }
  const validate = () => {
    if(newUser.firstname === '' || newUser.lastname === '' || newUser.email === '' || newUser.password === '' || newUser.repassword === ''){
      toast.error('All fields are required')
      return false
    }
    if(!isEmailValid(newUser.email)){
      toast.error('Invalid email')
      return false
    }
    if(newUser.password.length < 6){
      toast.error('Password must be at least 6 characters')
      return false
    }
    if(newUser.password !== newUser.repassword){
      toast.error('Password does not match')
      return false
    }
    return true
  }

  const isEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }
  const sentData = async () =>{
    const user = {
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      password: newUser.password,
      gender: newUser.gender}
    try {
      const res = await axios.post("http://localhost:4060/api/auth/signup", user)
      localStorage.setItem('tokenmessanger', res.data.token)
      localStorage.setItem('userId', res.data.user._id)
      localStorage.setItem('profileId', res.data.profile._id)
      window.location.reload()
    } catch (error) {
      console.log("error",error)
    }
  }

  const handleSubmit = async () => {
    const isValid = validate()
    if(isValid){
      setLoading(true)
      await sentData()
      setLoading(false)
      
    }
  }
  return (
    <div className='Signup'>
      <div className="user-name">
        <input type="text" placeholder='First Name' name='firstname' className='form-input short-input' onChange={handleChange} />
        <input type="text" placeholder='Last Name' name='lastname' className='form-input short-input' onChange={handleChange}/>
      </div>
      <div className="user-log">
        <input type="email" placeholder='Email' name='email' className='form-input long-input' onChange={handleChange}/>
        <input type="password" placeholder='Password' name='password' className='form-input long-input' onChange={handleChange}/>
        <input type="password" placeholder='Re-Password' name='repassword' className='form-input long-input' onChange={handleChange}/>
      </div>
      <div className="user-gender">
        <select name="gender" id="" onChange={handleChange}>
          <option>male</option>
          <option>female</option>
        </select>
      </div>
      <div className='submit-btn'>
        <button className='signup-btn' onClick={handleSubmit} >{loading ? <div className="loading-circle"></div> : 'signup'}</button>
      </div>
      <p className='log-p'>you gave already an account <Link to={'/'} className='log-l'>Login</Link></p>
    </div>
  )
}

export default Signup
