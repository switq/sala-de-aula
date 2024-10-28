import styled, { keyframes } from "styled-components";
import Character from "../Character";


const blink = keyframes`
  0%, 20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;


// Estilos e animação para os pontos
const Dot = styled.span`
  opacity: 0;
  animation: ${blink} 1.5s infinite;
  animation-delay: ${(props) => props.delay || "0s"};
`;



function Loading({ characterID }) {
    return (
        <div className="h-[100vh] flex items-center justify-center flex-col">
            <span
                className="text-4xl"
            >
                Loading
                <Dot>.</Dot>
                <Dot delay="0.2s">.</Dot>
                <Dot delay="0.4s">.</Dot>
            </span>
            {characterID >= 0 &&
                <Character size={200} />
            }
        </div>
    );
}

export default Loading;