import { combineEpics } from 'redux-observable';
import pingWinner from './pingWinner';
import pagewin from './pagewin';

export default combineEpics(
  pingWinner,
  pagewin,
);
