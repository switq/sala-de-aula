import { useEffect } from "react";
import CharacterSelector from "../../components/CharacterSelector";
import NameInput from "../../components/NameInput";
import { JoinContainer } from "./styles";
import { useSelector } from "react-redux";
import socketService from "../../services/socketService";
import { useNavigate } from 'react-router-dom';

function Join() {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (auth.isConnected)
            socketService.disconnect()
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
            <NameInput />
            <CharacterSelector />
            <button onClick={submit}>Join</button>
        </JoinContainer>
    );
}

export default Join;