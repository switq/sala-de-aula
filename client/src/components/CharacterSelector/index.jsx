import Character from "../Character";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacter } from "../../store/reducers/authReducer";

function CharacterSelector() {
    const characters = useSelector(state => state.assets.characters || []);
    const [characterID, setCharacterID] = useState(0);
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

    return (
        <>
            <h3>Select Your character:</h3>

            <SelectorContainer>
                <button onClick={back}> {'<'} </button>
                <Character characterID={characterID} size={200} />
                <button onClick={next}> {'>'} </button>
            </SelectorContainer>
        </>
    );
}

const SelectorContainer = styled.div`
    display: flex;
    align-items: center;
`


export default CharacterSelector;