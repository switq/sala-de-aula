import React, { useRef, useState, useEffect } from 'react'
import socketService from '../../services/socketService';
import { useSelector } from 'react-redux';
import MessageList from './MessageList';

export default function Chat({ socket }) {

  const messageRef = useRef()


  const handleSubmit = () => {
    const message = messageRef.current.value
    if (!message.trim()) return

    socketService.sendMessage('message', message)
    clearInput()
  }

  const clearInput = () => {
    messageRef.current.value = ''
  }

  const getEnterKey = (e) => {
    if (e.key === 'Enter')
      handleSubmit()
  }

  
  return (
    <div className='h-full flex justify-between flex-col p-6 gap-4'>
      {/* <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 " /> */}
      <MessageList />
      <input className='h-4' type="text" ref={messageRef} onKeyDown={(e) => getEnterKey(e)} />
    </div>
  )
}
