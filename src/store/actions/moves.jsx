import { SELECT_CELL, TRY_AGAIN, DUMMY } from '@constants/config'

export const selectCell = (currentPlayer, row, col) => ({
  type: SELECT_CELL,
  currentPlayer,
  row,
  col,
})

export const resetBoard = () => ({
  type: TRY_AGAIN,
  page: 2,
})

export const changePage = () => ({
  type: DUMMY,
})
