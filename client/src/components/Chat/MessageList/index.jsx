import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useRef, useState } from "react";
import MessageBox from "../MessageBox";

function MessageList() {
    const messageList = useSelector((state) => state.messages) || [];
    const actualUser = useSelector((state) => state.auth.id);
    const bottomRef = useRef();
    const containerRef = useRef();
    const messageRefs = useRef({}); // Armazena referências de cada mensagem
    const dispatch = useDispatch();
    const messageToScroll = useSelector(state => state.app.chat.scrollToMessage);


    const [isAtBottom, setIsAtBottom] = useState(false); // Estado para verificar se o usuário está no final

    const scrollToMessage = (messageId) => {
        const targetElement = document.getElementById(messageId);
        if (targetElement)
            targetElement?.scrollIntoView({ behavior: "smooth" });
        else
            scrollDown();
    };

    const scrollDown = () => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    };


    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const isBottom = scrollTop + clientHeight >= scrollHeight - 40; // Compara com um pequeno buffer
        setIsAtBottom(isBottom);
    };


    useEffect(() => {
        if (isAtBottom)
            scrollDown(); // Somente faz scroll quando uma nova mensagem é adicionada e o usuário está no final
    }, [messageList]);

    useEffect(() => {
        if (messageToScroll)
            scrollToMessage(messageToScroll.id);
    }, [messageToScroll]);

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="px-2 overflow-y-scroll text-black flex flex-col h-full"
        >
            {messageList.map((message) => (
                <div id={message.id} key={message.id} className="w-full">
                    <MessageBox
                        text={message.text}
                        author={message.author}
                        isAuthor={actualUser === message.authorId}
                    />
                </div>
            ))}
            <div ref={bottomRef} />
        </div>
    );
}

export default memo(MessageList);
