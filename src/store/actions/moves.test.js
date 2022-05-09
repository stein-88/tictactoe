import { selectCell, resetBoard, changePage } from './moves'
import { SELECT_CELL, TRY_AGAIN, DUMMY } from '@constants/config'

describe('SelectCell action', () => {
	test('Sould create an action to SelectCell', () => {
		const expectResult = selectCell('W', 124, 342)
		expect(expectResult).toEqual({
			type: SELECT_CELL,
			currentPlayer: 'W',
			row: 124,
			col: 342,
		})
	})
})

describe('Reset action', () => {
	test('Should create an action to Reset board', () => {
		const expectReset = {
			type: TRY_AGAIN,
			page: 2
		}
		const expectResult = resetBoard()
		expect(expectResult).toEqual(expectReset)
	})
})

describe('changePage action', () => {
	test('Should create an action to do nothing', () => {
		const expectChange = {
			type: DUMMY
		}
		const expectResult = changePage()
		expect(expectResult).toEqual(expectChange)
	})
})