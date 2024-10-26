import { useSelector } from "react-redux";
import styled from "styled-components";
import Character from "../Character";
import { useEffect } from "react";
import BaloonMesage from "../BaloonMesage";

const size = 86

const DeskContainer = styled.div`
    position: relative;
    width: ${size}px;
    height: ${size}px;
`

const DeskChildren = styled.span`
    position: absolute;
`

function Desk({ deskId = 0, userId }) {
    const users = useSelector((state) => state.users);
    const user = users.find((user) => user.id == userId) || {}
    const characterId = user?.character >= 0 ? user.character : null
    const desks = useSelector((state) => state?.assets?.desks || [])
    const desk = desks ? desks[deskId].dataUri : "";
    const messages = useSelector((state) => state.messages.filter(mes => mes.authorId == user.id));
    const lastMessage = messages.length ? messages[messages?.length - 1].text : ""

    useEffect(() => {
        console.log(lastMessage)
    }, [lastMessage]);


    return (
        <DeskContainer>
            {characterId >= 0 && characterId !== null && (
                <>
                    <DeskChildren>
                        <Character characterID={characterId} size={size} />
                    </DeskChildren>
                    <DeskChildren>
                        <BaloonMesage message={lastMessage} />
                    </DeskChildren>
                </>
            )}

            <DeskChildren>
                <img draggable={false} src={desk} alt="" width={size} />
            </DeskChildren>
        </DeskContainer>
    );
}

export default Desk;