import { game } from './game'
import * as action from '../../actions/moves'
import { PLAYERS, CURRENTLY_WINNER, TRY_AGAIN } from '@constants/config'
const [play1, play2] = PLAYERS
const initialState = {
	currentPlayer: play1,
	winner: null
}

describe('game', () => {
	test('Should create a default game state with currentPlayer X and no winner', () => {
		const expectResult = game(initialState)
		expect(expectResult).toEqual(initialState)
	})
	test('Should return initial state with action try_again', () => {
		const expectResult = game(initialState, {
			type: TRY_AGAIN
		})
		expect(expectResult).toEqual(initialState)
	})
	test('should match the currentPlayer', () => {
		const expectStateX = initialState
		const expectStateO = { currentPlayer: play2, winner: null }

		const expectResultX = game(expectStateX, action.selectCell(play1, 0, 0))
		const expectResultO = game(expectStateO, action.selectCell(play2, 0, 0))
		const expectResultW = game({
			currentPlayer: 'W',
			winner: null,
			type: 'banana'
		},
			{
				type: CURRENTLY_WINNER,
				winner: 'Batata'
			})
		expect(expectResultW).toEqual({
			currentPlayer: 'W',
			winner: 'Batata',
			type: 'banana'
		})
		expect(expectResultX).toEqual(expectStateO)
		expect(expectResultO).toEqual(expectStateX)
	})
})