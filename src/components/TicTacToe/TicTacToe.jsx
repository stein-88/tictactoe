import React, { useState } from 'react'
import StartGame from './StartGame'
import EndGame from './EndGame'
import Gaming from './Gaming'
import schema from './data'
import s from './TicTacToe.scss'

const TicTacToe = () => {
	const [thepage, setThePage] = useState(1)
	const [movPlay, setMovPlay] = useState(true)
	const [allMove, setAllMove] = useState(Array(3).fill(Array(3).fill('')))
	const [champs, setChamps] = useState()

	if (!schema) return null
	const { possibilities, theO, theX, atie, PLAYERS } = schema

	const auxWinner = (newBoard) => {
		if (!newBoard || !newBoard.length) return null
		let winner
		const BOARD = newBoard.flat()
		possibilities.forEach((comb) => {
			PLAYERS.forEach((player) => {
				if ([0, 1, 2]
					.map(cv => BOARD[comb[cv]] === player)
					.filter(ele => ele).length === 3) {
					winner = player
				}
			})
		})
		if (!winner && BOARD.filter(ele => ele === '').length === 0) {
			winner = atie
		}
		if (!winner) return null
		setThePage(3)
		return setChamps(winner)
	}

	const theClick = (indRow, indCol) => {
		const newAllMove = allMove.map((ele, ind) => {
			if (ind !== indRow) return ele
			return ele.map((coluna, indice) => {
				if (indice !== indCol || coluna !== '') return coluna
				return movPlay ? theX : theO
			})
		})
		setAllMove(newAllMove)
		setMovPlay(!movPlay)
		return auxWinner(newAllMove)
	}

	const resetGame = () => {
		setMovPlay(true)
		setChamps()
		return setAllMove(Array(3).fill(Array(3).fill('')))
	}

	const restartGame = () => {
		resetGame()
		return setThePage(2)
	}

	const winner = `Player ${champs === theX ? '1 - X' : '2 - O'}`
	const draw = false
	return (
		<section className={`w-100 ${s.bgNewlikeblue}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-12 m-auto">
						{thepage === 1 &&
							<StartGame setThePage={setThePage} />
						}
						{thepage === 2 &&
							<Gaming
								allMove={allMove}
								resetGame={resetGame}
								movPlay={movPlay}
								theClick={theClick}
							/>
						}
						{thepage === 3 &&
							<EndGame winner={winner} champs={champs} restartGame={restartGame} />
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TicTacToe