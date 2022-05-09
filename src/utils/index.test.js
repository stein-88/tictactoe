import { checkWinner } from './index'

describe('checkWinner function', () => {
	test('Should return false', () => {
		const Result = checkWinner()
		expect(Result).toEqual(false)
	})
	test('Should return winner X', () => {
		const board = [
			['X', 'X', 'X'],
			[null, null, 'O'],
			['O', null, null]
		]
		const Result = checkWinner(board)
		expect(Result).toEqual('X')
	})
	test('Should return winner O', () => {
		const board = [
			['X', null, 'X'],
			[null, 'X', null],
			['O', 'O', 'O']
		]
		const Result = checkWinner(board)
		expect(Result).toEqual('O')
	})
	test('Should return winner Tie', () => {
		const board = [
			['X', 'O', 'X'],
			['X', 'O', 'O'],
			['O', 'X', 'X']
		]
		const Result = checkWinner(board)
		expect(Result).toEqual('Tie')
	})
})