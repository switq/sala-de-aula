import { io } from "socket.io-client";
import { SOCKET_URL } from "../utils/constants";
import store from '../store';
import { setUserConnected, setUserDisconnected } from "../store/reducers/authReducer";

const dispatch = store.dispatch;

class SocketService {
    socket;

    async connect() {
        this.socket = io(SOCKET_URL);
        console.log(SOCKET_URL)

        this.socket.on('connect', () => {
            dispatch(setUserConnected(this.socket.id));
            console.log('socket connected: ', this.socket.id);
        });

        this.socket.on('disconnect', () => {
            dispatch(setUserDisconnected());
            console.log('socket disconnected');
        });
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

    // Função para desconectar o socket
    async disconnect() {
        if (this.socket) {
            this.socket.disconnect();  // Desconecta do socket
            dispatch(setUserDisconnected());  // Atualiza o estado para desconectado
            console.log('socket disconnected manually');
        }
    }
}

const socketService = new SocketService();
export default socketService;
