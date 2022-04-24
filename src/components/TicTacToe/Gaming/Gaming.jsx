import React from 'react'
import Btn from '../../Generics/Btn'
import { v4 as uuidv4 } from 'uuid'
import schema from './data'
import s from './Gaming.scss'

const Gaming = ({ theClick, movPlay, resetGame, allMove }) => {
    if (!schema) return null
    const { turnof, refer } = schema
    return (
        <section className="w-100">
            <section className="w-100 text-right pb-3">
                <Btn text="Reset" onClick={resetGame} />
            </section>
            <section className="w-100">
                <div className="row">
                    <div className="col-lg-8 col-12 m-auto text-center">
                        {refer && refer.length > 0 &&
                            refer.map((row, indRow) => (
                                <div key={uuidv4()} className="row">
                                    {row && row.length > 0 &&
                                        row.map((col, indCol) => (
                                            <div
                                                key={uuidv4()}
                                                onClick={() => {
                                                    if (allMove[indRow][indCol] !== '') return null
                                                    return theClick(indRow, indCol)
                                                }}
                                                className={`
                                                    col 
                                                    ${s.cursorPointer} 
                                                    ${s.quadrado} 
                                                    ${s[col]}
                                                `}
                                            >
                                                <section className="w-100 pt-4">
                                                    <p className="h1 mb-0 pt-3">{allMove[indRow][indCol]}</p>
                                                </section>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="w-100 text-right pt-3">
                <p className="h3">{turnof}{movPlay ? '1 - X' : '2 - O'}</p>
            </section>
        </section>
    )
}

export default Gaming