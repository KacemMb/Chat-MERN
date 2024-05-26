import React from 'react'
import '../Styles/Home.css'
import Navigation from '../Components/Navigation'
import Messages from '../Components/Messages'

const Home = () => {
  return (
    <div className='Home'>
      <Navigation />
      <Messages />
    </div>
  )
}

export default Home
