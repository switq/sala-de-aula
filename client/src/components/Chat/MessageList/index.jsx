import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import styled from "styled-components";

function MessageList() {
    const messageList = useSelector((state) => state.messages) || [];
    const actualUser = useSelector(state => state.auth.id);
    const bottomRef = useRef()

    const scrollDown = () => {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        // console.log(messageList);
        // scrollDown()
    }, [messageList])

    return (
        <div className="px-2 overflow-y-scroll text-black flex flex-col h-full">
            {
                messageList.map((message, index) => (
                    <div className={`max-w-[250px] w-fit bg-white mt-2 px-2 py-1 rounded-lg self-start ${actualUser == message.authorId && "bg-yellow-300 self-end"}`} key={index}>
                        <div className="message-author"><strong>{message.author}</strong></div>
                        <div className="message-text">{message.text}</div>
                    </div>
                ))
            }
            <div ref={bottomRef} />
        </div>
    );
}

export default MessageList;