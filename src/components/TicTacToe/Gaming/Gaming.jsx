import React from 'react'
import Btn from '@generics/Btn'
import { v4 as uuidv4 } from 'uuid'
import schema from './data'
import s from './Gaming.scss'

const Gaming = ({
 resetGame, currentPlayer, board, handleDispatch,
}) => {
	if (
		!schema
		|| !board
		|| !board.length
		|| !currentPlayer
		|| !handleDispatch
		|| !resetGame
	) return null

	const { turnof } = schema

	return (
		<section className="w-100">
			<section className="w-100 text-right pb-3">
				<Btn text="Reset" onClick={resetGame} />
			</section>
			<section className="w-100">
				{board.map((row, rowIndex) => (
					<div key={uuidv4()} className="col-lg-9 col-12 m-auto">
						<div className="row m-0">
							{row && row.length > 0
								&& row.map((colValue, colIndex) => (
									<div
										onClick={() => {
											if (colValue) return null
											return handleDispatch(rowIndex, colIndex)
										}}
										aria-hidden="true"
										data-testrefer={colValue ? s.noCursor : ''}
										key={uuidv4()}
										className={`col ${s.clickText} ${colValue ? s.noCursor : ''} ${s.tictok} ${s[`box${rowIndex}col${colIndex}`]}`}
									>
										{colValue || ''}
									</div>
								))}
						</div>
					</div>
				))}
			</section>
			<section className="w-100 text-right pt-3">
				<p className="h3">{`${turnof} ${currentPlayer}`}</p>
			</section>
		</section>
	)
}

export default Gaming
