import Character from "../Character";
import styled from "styled-components";
import { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacter } from "../../store/reducers/authReducer";
import Arrow from "../../assets/UI/arrow.svg"

function CharacterSelector() {
    const characters = useSelector(state => state.assets.characters || []);
    const character = useSelector(state => state.auth?.character);
    const [characterID, setCharacterID] = useState(character || 0);
    const dispatch = useDispatch();

    const next = () => {
        const newValue = characterID < characters.length - 1 ? characterID + 1 : 0
        setCharacterID(newValue);
        dispatch(setCharacter(newValue));
    }

    const back = () => {
        const newValue = characterID > 0 ? characterID - 1 : characters.length - 1
        setCharacterID(newValue);
        dispatch(setCharacter(newValue));
    }

    const authorName = useSelector(state => state?.assets?.characters[character].name)?.match(/-(.*)/)?.[1].trim() || "unknown"

    return (
        <div className=" flex flex-col justify-center items-center gap-2">

            <h3>Select Your character:</h3>
            <SelectorContainer>
                <img src={Arrow} width={46} onClick={back} className="cursor-pointer" />
                <div className="relative">
                    <div className="absolute w-full h-full bg-[#2022]" />
                    <Character characterID={characterID} size={200} />
                </div>
                <FlippedImg src={Arrow} width={46} onClick={next} className="cursor-pointer" />
            </SelectorContainer>
            <h3 className="">{authorName}</h3>
        </div>
    );
}

const SelectorContainer = styled.div`
    display: flex;
    align-items: center;
`

const FlippedImg = styled.img`
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`


export default memo(CharacterSelector);