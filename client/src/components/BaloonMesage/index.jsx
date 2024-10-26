import styled from 'styled-components';
import baloon from './../../assets/UI/balao.svg'
import { useSelector } from 'react-redux';

const BaloonImg = styled.img`
    position: absolute;
    /* z-index: 1; */
`

function BaloonMesage({ message }) {
    const emojis = useSelector(state => state.assets.emojis);
    const emoji = emojis.find(emoji => emoji.name === message.trim()) || emojis.find(emoji => emoji?.name == ':elipses:')
    if (!message.trim()) return <></>

    return (
        <div className='ml-[67px] mt-[-5px] flex justify-center items-center '>
            <BaloonImg src={baloon} alt="" height={86} />
            <BaloonImg src={emoji?.dataUri} width={32} />
        </div>
    );
}

export default BaloonMesage;