import baloon from './../../assets/UI/balao.svg'
import { useDispatch, useSelector } from 'react-redux';
import { BaloonImg } from './styles';
import { memo } from 'react';
import { scrollToMessage } from '../../store/reducers/appReducer';



function BaloonMesage({ message, messageId }) {
    const emojis = useSelector(state => state.assets.emojis);
    const emoji = emojis.find(emoji => emoji.name === message.trim()) || emojis.find(emoji => emoji?.name == ':elipses:')
    const dispatch = useDispatch();
    if (!message.trim()) return <></>

    const onClickEmoji = () => {
        dispatch(scrollToMessage(messageId))
    }

    return (
        <div onClick={onClickEmoji} className='cursor-pointer ml-[67px] mt-[-5px] flex justify-center items-center '>
            <BaloonImg src={baloon} alt="" height={86} draggable={false} />
            <BaloonImg src={emoji?.dataUri} height={32} width={32} draggable={false} />
        </div>
    );
}

export default memo(BaloonMesage);