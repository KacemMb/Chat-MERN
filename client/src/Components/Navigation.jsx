import React, { useEffect } from 'react'
import '../Styles/Navigation.css'
import Search from './Search'
import AddFriend from './AddFriend'
import Friend from './Friend'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import { setFriends } from '../Redux/UserFriendsSlice'
import Friends from './Friends'

const Navigation = () => {
  const dispatch = useDispatch()
  const profilepic = useSelector((state) => state.profile.pic)
  const myUser = useSelector((state) => state.user)
  const profileFriendsIds = useSelector((state) => state.profile.friends)
  console.log(profileFriendsIds)
  const ff = []
  const getFriends = async () => {
    try {
      for(let i = 0; i < profileFriendsIds.length; i++){
        const res = await axios.get(`http://localhost:4060/api/profile/friend/${profileFriendsIds[i]}`)
        console.log(res.data)
        const f = {
          name : res.data.friend.user.firstname + " " + res.data.friend.user.lastname,
          pic : res.data.friend.profil.profilePhoto,
          id : res.data.friend.user._id,
        }
        dispatch(setFriends(f))
        ff.push(f)
      }
    } catch (error) {
      console.log("error getting friends",error)
    }
  }

  useEffect(() => {
    getFriends()
  },[profileFriendsIds])
  return (
    <div className='Navigation'>
        <Search />
        <AddFriend />
      <div className='FriendList'>
        <Friends ff={ff} />
      </div>
      <Link to={'/profile'} style={{textDecoration : "none"}}>
      <div className='UserProfile'>
        <img src={profilepic} alt="" />
        <div className='UserInfo'>
          <h3> {myUser.firstname} {myUser.lastname}</h3>
        </div>
      </div>
      </Link>
      
    </div>
  )
}

export default Navigation
