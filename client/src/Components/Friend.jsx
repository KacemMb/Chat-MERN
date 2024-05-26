import React from 'react'
import { Link } from 'react-router-dom'

const Friend = ({name , bio , pic, key}) => {
  return (
    <Link to={`/messages/${key}`}>
      <div className='Friend' id={key}>
        <img src={pic} alt="" />
        <div className='FriendInfo'>
          <h3>{name}</h3>
          <p>{bio}</p>
        </div>
      </div>
    </Link>
  )
}

export default Friend
