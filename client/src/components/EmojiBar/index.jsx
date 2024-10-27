import { useSelector } from "react-redux";
import { useState } from "react";
import socketService from "../../services/socketService";

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
        <div className="flex justify-center">
            <div className={`${isOpen ? 'block' : 'hidden'} absolute bg-slate-100 w-56 h-72 top-[-280px] overflow-y-auto`}>
                <div className="flex flex-wrap gap-2 justify-center p-2">
                    {emojis.map(({ dataUri, name }) => <img key={name} onClick={() => sendEmoji(name)} className="cursor-pointer" draggable={false} src={dataUri} width={46} height={46} />)}
                </div>
            </div>
            <button onClick={toggle} className="">Emojis</button>
        </div>
    );
}

export default EmojiBar;