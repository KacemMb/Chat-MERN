import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {

  const [loading, setLoading] = useState(false)
  const [logData, setLogData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setLogData({
      ...logData,
      [e.target.name]: e.target.value
    })
  }
  const validPassword = (password) => {
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return false
    }
    return true
  }
  const isEmailValid = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const validate = () => {
    if (logData.email === '' || logData.password === '') {
      toast.error('All fields are required')
      return false
    }
    if (!isEmailValid(logData.email)) {
      toast.error('Invalid email')
      return false
    }
    if (!validPassword(logData.password)) {
      return false
    }
    return true
  }
  const login = async () => {
    try {
      const res = await axios.post('http://localhost:4060/api/auth/login', logData)
      localStorage.setItem('tokenmessanger', res.data.token)
      localStorage.setItem('userId', res.data.user._id)
      localStorage.setItem('profileId', res.data.profile._id)
    } catch (error) {
      console.log('error', error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      login()
      console.log(logData)
    }
  }

  return (
    <div className='Login'>
      <input type="email" placeholder='Email' name='email' className='form-input long-input' onChange={handleChange}/>
      <input type="password" placeholder='Password' name='password' className='form-input long-input' onChange={handleChange} />
        <button className='signup-btn' onClick={handleSubmit}>Login</button>
        <p className='log-p'>you havn't an account <Link to={'/signup'} className='log-l'>Signup</Link></p>
    </div>
  )
}

export default Login
