import { ofType } from 'redux-observable';
import { SELECT_CELL, CURRENTLY_WINNER } from '@constants/config';
import { filter, map } from 'rxjs/operators';
import { checkWinner } from '@utils';

const pingWinner = (action$, state$) => action$.pipe(
  ofType(SELECT_CELL),
  filter(() => checkWinner(state$.value.board)),
  map(() => ({
    type: CURRENTLY_WINNER,
    winner: checkWinner(state$.value.board),
    page: state$.value.page + 1,
  })),
);

export default pingWinner;
