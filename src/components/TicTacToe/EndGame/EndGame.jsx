import React from 'react'
import champ from '../../../statics/images/thechampion.jpg'
import placar from '../../../statics/images/allwinners.jpg'
import Btn from '../../Generics/Btn'
import schema from './data'

const EndGame = ({ winner, champs, restartGame }) => {
    if (!champs && !winner || !schema) return null
    const { atie, thewinner, playagain } = schema
    return (
        <div className="row">
            <div className="col-lg-9 col-12 m-auto">
                <section className="w-100 text-center">
                    <p className="h1">{champs === atie ? atie : <span>{thewinner}{<strong className="text-danger">{winner}</strong>}</span>}</p>
                    <section className="w-100 px-5">
                        <img className="w-100 img-fluid rounded py-3 px-5" src={champs === 'A tie' ? placar : champ} alt="" />
                    </section>
                    <Btn text={playagain} onClick={restartGame} />
                </section>
            </div>
        </div>
    )
}

export default EndGame