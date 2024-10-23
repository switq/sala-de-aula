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

function Desk({ deskId = 0, characterId }) {
    const desks = useSelector((state) => state?.assets?.desks || [])
    const desk = desks ? desks[deskId].dataUri : ""


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