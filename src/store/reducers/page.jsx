/* eslint-disable */
import { PAGE_NUM, CURRENTLY_WINNER, TRY_AGAIN } from '@constants/config';

const page = (state = 1, action) => {
  if (!action || ![PAGE_NUM, TRY_AGAIN, CURRENTLY_WINNER].includes(action.type)) return state;
  if (action.type === PAGE_NUM) return action.page;
  if (action.type === TRY_AGAIN) return action.page;
  if (action.type === CURRENTLY_WINNER) return action.page;
  return state;
};

export default page;
