import React,{ useState } from 'react'
 
import onlineIcon from '../../icons/onlineIcon.png' 
import './TextContainer.css'

const Infobar=({users})=>{
  return(
    users?
    (
      <div className="TextContainer">
        <h1>People currently chatting:</h1>
        <div>
        {users.map((user)=>(
            <div classname="usersContainer">
              <img className="onlineIcon" src={onlineIcon} alt="online"/>
              <h3>{user.name}</h3>
            </div>
        ))}
        </div>
        
      </div>
    ):
    null
  )
}

export default Infobar