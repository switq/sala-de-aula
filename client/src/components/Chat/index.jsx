import React, { useRef, useState, useEffect } from 'react'
import socketService from '../../services/socketService';
import { useDispatch, useSelector } from 'react-redux';
import MessageList from './MessageList';
import { scrollToMessage } from '../../store/reducers/appReducer';
import Send from "./../../assets/UI/send.svg";

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
    <div className='h-full flex justify-between flex-col p-6 gap-4 '>
      <MessageList />
      <div className='flex justify-stretch w-full items-center gap-2'>
        <input
          type="text" onKeyDown={(e) => getEnterKey(e)}
          className="h-4 p-4 w-full bg-white text-gray-800 placeholder-gray-400 font-pixel text-sm border-4 border-gray-300  outline-none shadow-[4px_4px_0px_#D1D5DB] focus:shadow-[2px_2px_0px_#9CA3AF] transition-shadow"
          ref={messageRef}
        />
        <img onClick={handleSubmit} src={Send} alt="" className='cursor-pointer' width={46} />
      </div>

    </div>
  )
}
