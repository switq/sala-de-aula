import React, { useRef, useState, useEffect } from 'react'
import socketService from '../../services/socketService';
import { useDispatch, useSelector } from 'react-redux';
import MessageList from './MessageList';
import { scrollToMessage } from '../../store/reducers/appReducer';

export default function Chat() {

  const messageRef = useRef()
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const message = messageRef.current.value
    if (!message.trim()) return

    socketService.sendMessage('message', message)
    clearInput()
    dispatch(scrollToMessage())
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
      <MessageList />
      <input className='h-4' type="text" ref={messageRef} onKeyDown={(e) => getEnterKey(e)} />
    </div>
  )
}
