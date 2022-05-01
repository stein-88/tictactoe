import React from 'react';
import { PLAYERS } from '@constants/config';

const [play1, play2] = PLAYERS;
const schemastartgame = {
  titulo: 'Tic Tac Toe',
  btntitle: 'Start Game',
  players: [
    {
      play: 'Player One: ',
      strong: <strong className="text-danger">{play1}</strong>,
    },
    {
      play: 'Player Two: ',
      strong: <strong className="text-danger">{play2}</strong>,
    },
  ],
};

export default schemastartgame;
