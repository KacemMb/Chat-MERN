import React from 'react'
import '../Styles/Message.css'
const Message = ({position}) => {
    return (
        <div className={position === true ? "Message left" : "Message right"}>
            <img src="./images/user.jpeg" alt="" />
            <p className='text'> hello this is a message</p>
        </div>
    )
}

export default Message
