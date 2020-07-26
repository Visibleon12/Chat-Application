import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'
import Infobar from '../Infobar/Infobar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'
let socket 

const Chat=({location})=>{
  const [name, setName]=useState('')
  const [room, setRoom]=useState('')
  const [message, setMessage]=useState('')
  const [messages, setMessages]=useState([])
  const [users, setUsers]=useState('')
  const Endpoint='https://react-chatting.herokuapp.com/'
  useEffect(()=>{
    const {name,room}=queryString.parse(location.search)

    socket=io(Endpoint)
    setName(name)
    setRoom(room)

    socket.emit('join',{name,room},()=>{
      
    })

    return ()=>{
      socket.emit('disconnect')
      socket.off()
    }
  },[Endpoint,location.search])

  useEffect(()=>{
    socket.on('message',(message)=>{
      setMessages([...messages,message])
    })
  },[messages])

  useEffect(()=>{
    socket.on('roomData',({users})=>{
      setUsers(users)
    })
  },[users])

  const sendMessage=(event)=>{

      event.preventDefault()
      if(message){
        socket.emit('sendMessage',message,()=>setMessage(''))
      }
  }

  return(
    <div className="outerContainerChat">
      <div className="innerContainerChat">
        <Infobar room={room}/>
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
      <TextContainer users={users}/>
    </div>

  )
}

export default Chat