import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import characterSprites from '../../assets/character-sprites';
import Spinner from '@atlaskit/spinner'
import { useSelector } from 'react-redux';

function Character({ characterID = 0, size = 64, }) {

  const characters = useSelector((state) => state?.assets?.characters);
  const character = characters ? characters[characterID]?.dataUri : '';
  const width = characters ? characters[characterID]?.width : 64;
  const steps = width / 32
  const duration = `${1}s`;


  const CharacterContainer = styled.div`
        min-height: ${size}px;
        width: ${size}px;
        overflow: hidden;
    `;

  const Spritesheet = styled.img`
    animation: moveSpritesheet ${duration} steps(${steps}) infinite;

    @keyframes moveSpritesheet {
      from {
        transform: translate3d(0px, 0, 0);
      }
      to {
        transform: translate3d(-100%, 0, 0);
      }
    }
  `;

  if (!character) return ''

  return (
    <CharacterContainer>
      <Spritesheet draggable={false} src={character} alt="character sprite" height={size} />
    </CharacterContainer>
  );
}

export default Character;
