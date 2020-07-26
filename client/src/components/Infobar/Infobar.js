import React,{ useState } from 'react'

import closeIcon from '../../icons/closeIcon.png' 
import onlineIcon from '../../icons/onlineIcon.png' 
import './Infobar.css'

const Infobar=({room})=>{
  return(
    <div className="infobar">
      <div className="leftinnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online"/>
        <h3>{room}</h3>
      </div>
      <div className="rightinnerContainer">
        <a href="/"><img className="closeIcon" src={closeIcon} alt="close"/></a>
      </div>
    </div>
  )
}

export default Infobar