import React from 'react'
import virus from '@images/tictactoe.png'
import Btn from '@generics/Btn'
// import { v4 as uuidv4 } from 'uuid'
import schema from './data'

const StartGame = ({ changeToPage }) => {
	if (!schema || !changeToPage) return null
	const { titulo, players, btntitle } = schema
	return (
		<div className="row">
			<div className="col-lg-6 col-12">
				<p className="h1 pb-5">{titulo}</p>
				{players && players.length > 0
					&& players.map((player, ind) => {
						const { play, strong } = player
						return (
							<p
								key={`fdasfdsa${ind + 1}`}
								data-test="players"
								className={`h3 ${ind === 0 ? 'py-3' : ''.trim()}`}
							>
								{play}
								<strong className="text-danger">{strong}</strong>
							</p>
						)
					})}
			</div>
			<div className="col-lg-6 col-12">
				<section className="w-100 text-center">
					<section className="w-100 px-5 mb-3">
						<img className="w-100 img-fluid rounded" src={virus} alt={titulo} />
					</section>
					<Btn text={btntitle} onClick={() => changeToPage()} />
				</section>
			</div>
		</div>
	)
}

export default StartGame
