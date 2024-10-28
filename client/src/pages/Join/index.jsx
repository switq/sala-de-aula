import { useEffect } from "react";
import CharacterSelector from "../../components/CharacterSelector";
import NameInput from "../../components/NameInput";
import { JoinContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import socketService from "../../services/socketService";
import { useNavigate } from 'react-router-dom';
import { cleanScroll } from "../../store/reducers/appReducer";
import styled from "styled-components";

function Join() {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.isConnected)
            socketService.disconnect()
        dispatch(cleanScroll())
    }, []);


    const submit = async () => {
        const { username, character } = auth;
        if (!username.trim()) return;

        await socketService.connect();
        await socketService.sendMessage('set_user', { username, character })
        navigate("/classroom");
    }

    return (
        <JoinContainer>
            <CharacterSelector />
            <div>
                <NameInput />
                <CustomButton onClick={submit}>Join</CustomButton>
            </div>
        </JoinContainer>
    );
}

const CustomButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 20px;
  padding: 8px 40px;
  color: white;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
  background-color: #FF8235;
  text-shadow: 0px 1px 0px #000;
  box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 #915100;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    top: 10px;
    background-color: #f78900;
    box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    z-index: -1;
    background-color: #2b1800;
    border-radius: 5px;
  }
`;


export default Join;