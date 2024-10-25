import { useEffect, useState } from "react";
import ConnectionProvider from "../../providers/ConnectionProvider";
import DesksContainer from "../../components/DesksContainer";
import styled from "styled-components";
import Chat from "../../components/Chat/";
import { useNavigate } from "react-router";
import BottomBar from "../../components/BottomBar";

const Room = styled.div`
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
                <BottomBar />
            </div>
        </ConnectionProvider>
    );
}

export default Classroom;