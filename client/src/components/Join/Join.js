import React,{ useState } from 'react'
import {Link} from 'react-router-dom'

import './Join.css'

const Join=()=>{
  const [name, setName]=useState('')
  const [room, setRoom]=useState('')
  return(
    <div className="outerContainer">
      <div className="innerContainer">
        <h3 className="heading">Join</h3>
        <div ><input  className="input" type="text" placeholder="Name" onChange={(event)=>{setName(event.target.value)}}/></div>
        <div ><input className="input" type="text" placeholder="Room" onChange={(event)=>{setRoom(event.target.value)}}/></div>
        <Link onClick={(event)=>(!name||!room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button">Sign in</button>
        </Link>
      </div>
    </div>
  )
}

export default Join