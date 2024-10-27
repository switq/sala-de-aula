import { useSelector } from "react-redux";

function MessageBox({ text, author, isAuthor }) {


    return (
        <div className={`max-w-[250px] w-fit bg-white mt-2 px-2 py-1 rounded-lg self-start ${isAuthor && "bg-yellow-300 self-end"}`} >
            <div className="message-author"><strong>{author}</strong></div>
            <Message text={text} />
        </div>
    );
}

const Message = ({ text }) => {
    const emojis = useSelector(state => state.assets.emojis);
    const emoji = emojis.find(emoji => emoji.name === text.trim())

    if (emoji) return <img className="p-2" src={emoji.dataUri} alt="" width={64} height={64} />

    return <span>{text}</span>
}


export default MessageBox;