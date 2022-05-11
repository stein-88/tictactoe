/* eslint-disable */
import { SELECT_CELL, CURRENTLY_WINNER, TRY_AGAIN, PLAYERS } from '@constants/config'

const [play1, play2] = PLAYERS

export const game = (state = { currentPlayer: play1, winner: null }, action) => {
	if (!action || ![SELECT_CELL, CURRENTLY_WINNER, TRY_AGAIN].includes(action.type)) return state
	if (action.type === TRY_AGAIN) {
		return {
			currentPlayer: play1,
			winner: null,
		}
	}
	if (action.type === CURRENTLY_WINNER) {
		return {
			...state,
			winner: action.winner,
		}
	}
	return {
		...state,
		currentPlayer: state.currentPlayer === play1 ? play2 : play1,
	}
}
