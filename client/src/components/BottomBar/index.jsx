import React, { useState, useRef, useEffect } from 'react';
import { Drawer } from 'vaul';
import Chat from '../Chat';
import { useDispatch, useSelector } from 'react-redux';
import ChatButtomSvg from "../../assets/UI/chatBut.svg"

const BottomBar = () => {
    const [open, setOpen] = React.useState(false);
    const openChat = () => setOpen(true);
    const scrollToMessage = useSelector(state => state.app.chat.scrollToMessage);

    useEffect(() => {
        if (scrollToMessage.id) {
            openChat()   
        }
    }, [scrollToMessage]);

    return (
        <Drawer.Root open={open} onOpenChange={setOpen}>
            <Drawer.Trigger className='bg-transparent outline-none border-none'>
                <img src={ChatButtomSvg} className="cursor-pointer" height={64} width={64} />
            </Drawer.Trigger>
            <Drawer.Portal className={"absolute"}>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-gray-400 flex flex-col rounded-t-[10px] mt-24 h-[80%] lg:h-[90%] fixed bottom-0 left-0 right-0 outline-none">
                    <div className=" bg-gray-400 rounded-t-[10px] flex-1 overflow-y-hidden">
                        <div className="max-w-[34em] mx-auto h-full flex flex-col">
                            <Drawer.Title className='hidden'>AAA</Drawer.Title>
                            <Chat />
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default BottomBar;
