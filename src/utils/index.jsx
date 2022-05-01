import { WINNING_COMBINATIONS, PLAYERS, ATIE } from '@constants/config';

export const checkWinner = (board) => {
  if (!board) return false;
  let winner;
  const BOARD = board.flat();
  WINNING_COMBINATIONS.forEach((comb) => {
    PLAYERS.forEach((player) => {
      if ([0, 1, 2]
        .map((cv) => BOARD[comb[cv]] === player)
        .filter((ele) => ele).length === 3) {
        winner = player;
      }
    });
  });
  if (!winner && BOARD.filter((cv) => !cv).length === 0) {
    winner = ATIE;
  }
  return winner;
};
