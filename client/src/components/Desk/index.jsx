import { useSelector } from "react-redux";
import styled from "styled-components";
import Character from "../Character";

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


    return (
        <DeskContainer>
            {characterId >= 0 && (
                <DeskChildren>
                    <Character characterID={characterId} size={size} />
                </DeskChildren>
            )}

            <DeskChildren>
                <img draggable={false} src={desk} alt="" width={size} />
            </DeskChildren>
        </DeskContainer>
    );
}

export default Desk;