import React, { useEffect } from 'react'
import Friend from './Friend'
import { useDispatch,useSelector } from 'react-redux'

const Friends = ({ff}) => {
    const dispatch = useDispatch()
    const profiless = useSelector((state) => state.userFriends)
    console.log("ss",profiless)
  return (
    <div>
      {ff.map((f) => {
        return <Friend name={f.name} pic={f.pic} key={f.id} bio={f.bio} />
      })}
    </div>
  )
}

export default Friends
