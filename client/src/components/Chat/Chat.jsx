import React, { useRef, useState, useEffect } from 'react'
import { Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import style from './Chat.module.css'

export default function Chat({ socket }) {

  const bottomRef = useRef()
  const messageRef = useRef()
  const [activeUsers, setActiveUsers] = useState([]);
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageList((current) => [...current, data])
    })

    socket.on('active_users', data => {
      setActiveUsers((current) => [...data])
    })

    return () => {
      socket.off('receive_message')
      socket.off('active_users')

    }
  }, [socket])

  useEffect(() => {
    console.log(activeUsers)
  }, [activeUsers]);

  useEffect(() => {
    scrollDown()
  }, [messageList])

  const handleSubmit = () => {
    const message = messageRef.current.value
    if (!message.trim()) return

    socket.emit('message', message)
    clearInput()
  }

  const clearInput = () => {
    messageRef.current.value = ''
  }

  const getEnterKey = (e) => {
    if (e.key === 'Enter')
      handleSubmit()
  }

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      
    </div>
  )
}
