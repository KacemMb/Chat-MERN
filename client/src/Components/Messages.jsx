import React from 'react'
import '../Styles/Messages.css'
import Message from './Message'


const Messages = () => {
  return (
    <div className='Messages'>
      <div className='Message-Header'>
        <img src="./images/user.jpeg" alt="" />
        <div className="userInfo">
          <h3>Friend Name</h3>
          <p>Bio : </p>
        </div>
      </div>
      <div className='Message-Body'>
        <Message position = {true}/>
        <Message position = {false}/>
      </div>
      <div className="Message-footer">
        <input type="text" placeholder="Type a message" />
        <button>
          <img src="./images/send.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Messages
