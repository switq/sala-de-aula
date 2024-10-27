import { useEffect, useState } from "react";
import ConnectionProvider from "../../providers/ConnectionProvider";
import DesksContainer from "../../components/DesksContainer";
import styled from "styled-components";
import Chat from "../../components/Chat/";
import { useNavigate } from "react-router";
import BottomBar from "../../components/BottomBar";
import EmojiBar from "../../components/EmojiBar";

const Room = styled.div`
    margin-top: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BackButton = () => {
    const navigate = useNavigate();
    const onClick = () => navigate('/')

    return <button className="absolute top-0 left-0" onClick={onClick}>{'<'}</button>
}

function Classroom() {
    

    return (
        <ConnectionProvider>
            <div>
                <Room>
                    <DesksContainer />
                </Room>
                <BackButton />

                <div className="right-0 bottom-0 absolute flex text-center justify-center gap-4 p-4">
                    <EmojiBar />
                    <BottomBar />
                </div>
            </div>
        </ConnectionProvider>
    );
}

export default Classroom;