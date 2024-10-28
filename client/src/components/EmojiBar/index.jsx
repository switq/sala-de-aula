import { useSelector } from "react-redux";
import { useState } from "react";
import socketService from "../../services/socketService";
import EmojiButtomSvg from "../../assets/UI/emojiBut.svg"

function EmojiBar() {
    const emojis = useSelector(state => state.assets.emojis);
    const [isOpen, setisOpen] = useState(false);
    const close = () => setisOpen(false);
    const toggle = () => setisOpen(!isOpen)

    const sendEmoji = (text) => {
        socketService.sendMessage('message', text);
        close();
    }




    return (
        <div className="flex justify-center relative">
            <div className={`${isOpen ? 'block' : 'hidden'} absolute bg-slate-100 w-56 h-72 top-[-300px] overflow-y-auto`}>
                <div className="flex flex-wrap gap-2 justify-center p-2">
                    {emojis.map(({ dataUri, name }) => <img key={name} onClick={() => sendEmoji(name)} className="cursor-pointer" draggable={false} src={dataUri} width={46} height={46} />)}
                </div>
            </div>
            <img draggable={false} src={EmojiButtomSvg} onClick={toggle} className="cursor-pointer" height={64} width={64} />
        </div>
    );
}

export default EmojiBar;