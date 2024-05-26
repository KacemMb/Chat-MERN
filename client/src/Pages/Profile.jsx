import React, { useEffect, useState } from 'react'
import '../Styles/Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { setProfile} from '../Redux/ProfileSlice'
import { setUser } from '../Redux/UserSlice'

import axios from 'axios'
import toast from 'react-hot-toast'


const Profile = () => {
  const userId = localStorage.getItem('userId')
  const dispatch = useDispatch()

  const getUserData = async () => {
    try {
      const res = await axios.get(`http://localhost:4060/api/profile/getuser/${userId}`)
      const myUser = res.data.user
      const myProfile = res.data.profil
      dispatch(setUser(myUser))
      dispatch(setProfile(myProfile))
    } catch (error) {
      console.log('Error in getUserData: ', error)
      toast.error('Something went wrong in getUserData')   
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  const profile = useSelector((state) => state.profile)
  const me = useSelector((state) => state.user)

  const logout = () => {
    localStorage.removeItem('tokenmessanger')
    window.location.reload()
  }
  return (
    <div className='Profile'>
      <div className='ProfileHeader'>
      <img src={profile.pic} alt="" />
      <div className='myInfo'>
        <h2>{me.firstname} {me.lastname}</h2>
        <p>{profile.bio}</p>
      </div>
      </div>
      <div className='changes'>
        <div className='change-name'>
          <input type="password" placeholder='your Password' />
          <input type="password" placeholder='your new Password'  />
          <button>change</button>
        </div>
        <div className='change-name'>
          <input type="text" placeholder='your new bio'  />
          <button>change</button>
        </div>
        <button className='logout' onClick={logout}>Log out</button>

      </div>

    </div>
  )
}

export default Profile
