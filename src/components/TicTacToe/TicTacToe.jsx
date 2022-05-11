import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCell, resetBoard, changePage } from '@actions/moves'
import StartGame from './StartGame'
import EndGame from './EndGame'
import Gaming from './Gaming'
import s from './TicTacToe.scss'

const selectBoard = (state) => state.board
const selectGame = (state) => state.game
const selectPage = (state) => state.page

const TicTacToe = () => {
	const dispatch = useDispatch()
	const board = useSelector(selectBoard)
	const game = useSelector(selectGame)
	const selectedPage = useSelector(selectPage)

	const changeToPage = () => dispatch(changePage())
	const resetGame = () => dispatch(resetBoard())

	const handleDispatch = (row, col) => {
		if (!game || !game.currentPlayer) return null
		return dispatch(selectCell(game.currentPlayer, row, col))
	}
	return (
		<section className={`w-100 ${s.bgNewlikeblue}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-12 m-auto">
						{selectedPage === 1
							&& <StartGame changeToPage={changeToPage} />}
						{selectedPage === 2
							&& (
								<Gaming
									resetGame={resetGame}
									handleDispatch={handleDispatch}
									currentPlayer={game && game.currentPlayer}
									board={board}
								/>
							)}
						{selectedPage === 3
							&& <EndGame restartGame={resetGame} winner={game.winner} />}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TicTacToe
