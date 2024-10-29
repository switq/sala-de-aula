import { useEffect, useState } from "react";
import ConnectionProvider from "../../providers/ConnectionProvider";
import DesksContainer from "../../components/DesksContainer";
import styled from "styled-components";
import Chat from "../../components/Chat/";
import { useNavigate } from "react-router";
import BottomBar from "../../components/BottomBar";
import EmojiBar from "../../components/EmojiBar";
import Arrow from "../../assets/UI/arrow.svg"

const Room = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const BackButton = () => {
    
    const navigate = useNavigate();
    const onClick = () => navigate('/')

    return <img className="cursor-pointer absolute top-0 left-0 p-2" onClick={onClick} src={Arrow} height={48}/>
}

function Classroom() {


    return (
        <ConnectionProvider>
            <div className="h-[100dvh] flex flex-col">
                <Room>
                    <DesksContainer />
                </Room>

                <div className="flex text-center justify-center gap-4 p-4">
                    <EmojiBar />
                    <BottomBar />
                </div>
                <BackButton />
            </div>
        </ConnectionProvider>
    );
}

export default Classroom;