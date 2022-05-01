import React from 'react';
import champ from '@images/thechampion.jpg';
import placar from '@images/allwinners.jpg';
import Btn from '@generics/Btn';
import { ATIE } from '@constants/config';
import schema from './data';

const EndGame = ({ winner, restartGame }) => {
  if (!winner || !schema) return null;
  const { thewinner, playagain } = schema;
  return (
    <div className="row">
      <div className="col-lg-9 col-12 m-auto">
        <section className="w-100 text-center">
          <p className="h1">{winner === ATIE ? ATIE : `${thewinner} ${winner}`}</p>
          <section className="w-100 px-5">
            <img className="w-100 img-fluid rounded py-3 px-5" src={winner === ATIE ? placar : champ} alt="" />
          </section>
          <Btn text={playagain} onClick={restartGame} />
        </section>
      </div>
    </div>
  );
}

export default EndGame;
