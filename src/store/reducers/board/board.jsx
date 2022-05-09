/* eslint-disable */
import { SELECT_CELL, TRY_AGAIN } from '@constants/config'

export const createBoard = (i) => Array(i).fill(Array(i).fill(null))

export const board = (state = createBoard(3), action) => {
  if (!action || ![SELECT_CELL, TRY_AGAIN].includes(action.type)) return state
  if (action.type === TRY_AGAIN) return createBoard(3)
  if (action.type === SELECT_CELL) {
    const newBoard = JSON.parse(JSON.stringify(state))
    return newBoard.map((row, indrow) => {
      if (indrow !== action.row) return row
      return row.map((col, indcol) => {
        if (indcol !== action.col) return col
        return action.currentPlayer
      })
    })
  }
  return state
}