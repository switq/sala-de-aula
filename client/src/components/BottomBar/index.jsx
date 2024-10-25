import React, { useState, useRef, useEffect } from 'react';
import { Drawer } from 'vaul';
import Chat from '../Chat';

const BottomBar = ({ children }) => {

    return (
        <Drawer.Root>
            <Drawer.Trigger className="right-0 bottom-0 absolute flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
                Chat
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-gray-400 flex flex-col rounded-t-[10px] mt-24 h-[80%] lg:h-[90%] fixed bottom-0 left-0 right-0 outline-none">
                    <div className=" bg-gray-400 rounded-t-[10px] flex-1 overflow-y-hidden">
                        <div className="max-w-md mx-auto h-full flex flex-col">
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
