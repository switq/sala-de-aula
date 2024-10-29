import { io } from "socket.io-client";
import { SOCKET_URL } from "../utils/constants";
import store from '../store';
import { setUserConnected, setUserDisconnected, setLoading } from "../store/reducers/authReducer";

const dispatch = store.dispatch;

class SocketService {
    socket;

    async connect() {
        dispatch(setLoading(true));  // Ativa o loading

        this.socket = io(SOCKET_URL, {
            transports: ['websocket'],
        });

        this.socket.on('connect', () => {
            dispatch(setUserConnected(this.socket.id));
            console.log('socket connected: ', this.socket.id);
        });

        this.socket.on('disconnect', () => {
            dispatch(setUserDisconnected());
            console.log('socket disconnected');
        });

        this.socket.on('connect_error', () => {
            dispatch(setLoading(false));  // Desativa o loading em caso de erro
        });
    }

    async disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            dispatch(setUserDisconnected());
            console.log('socket disconnected manually');
        }
    }

    subscribe(event, callback) {
        if (this.socket) {
            this.socket.on(event, callback);
        }
    }

    unsubscribe(event) {
        if (this.socket) {
            this.socket.off(event);
        }
    }

    async sendMessage(event, data) {
        if (this.socket) {
            this.socket.emit(event, data);
        }
    }
}

const socketService = new SocketService();
export default socketService;
