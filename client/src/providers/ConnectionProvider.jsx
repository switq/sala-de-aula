import { useEffect } from "react";
import socketService from "../services/socketService";
import { useDispatch } from 'react-redux';
import { setUsers } from "../store/reducers/usersReducer";
import { clearMessages, addMessage } from "../store/reducers/messagesReducer";

function ConnectionProvider({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        socketService.subscribe('active_users', (res) => {
            dispatch(setUsers(res))
        })
        socketService.subscribe('receive_message', (res) => {
            dispatch(addMessage(res))
        })

        return () => {
            dispatch(setUsers([]))
            dispatch(clearMessages())
            socketService.unsubscribe('active_users');
            socketService.unsubscribe('receive_message');
        }
    }, [])

    return (children);
}

export default ConnectionProvider;