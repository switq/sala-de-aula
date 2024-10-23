import { useEffect } from "react";
import socketService from "../services/socketService";
import { useDispatch } from 'react-redux';
import { setUsers } from "../store/reducers/usersReducer";

function ConnectionProvider({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        socketService.subscribe('active_users', (res) => {
            dispatch(setUsers(res))
        })

        return () => {
            dispatch(setUsers([]))
            socketService.unsubscribe('active_users');
        }
    }, [])

    return (children);
}

export default ConnectionProvider;