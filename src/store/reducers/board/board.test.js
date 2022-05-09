import { createBoard, board } from './board'
import * as action from '../../actions/moves'

const expectBoardState = createBoard(3)

describe('createBoard', () => {
    test('Should generate 2d array of given length', () => {
        Array(10).fill().map((_, i) => {
            const expectBoard = createBoard(i)
            expect(expectBoard).toHaveLength(i)
            expectBoard.forEach(indrow => expect(indrow).toHaveLength(i))
            return expectBoard
        })
    })
})

const minhaFunc = (selPlayer, selRow, selCol) => {
    //if (!player || !row ||  !col) return null
    return expectBoardState.map((row, indrow) => {
        if (indrow !== selRow) return row
        return row.map((col, indcol) => {
            if (indcol === selCol) return selPlayer
            return col
        })
    })
}

describe('board', () => {
    test('board should have length 5', () => {
        const expectResult = createBoard(5)
        expect(expectResult).toHaveLength(5)
    })
    test('Should match with the currentPlayer the co-ordinate', () => {
        const expectResult = board(expectBoardState, action.selectCell('X', 2, 1))
        const expectState = minhaFunc('X', 2, 1)
        expect(expectResult).toEqual(expectState)
    })
})
