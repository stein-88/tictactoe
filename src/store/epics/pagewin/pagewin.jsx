import { ofType } from 'redux-observable'
import { DUMMY, PAGE_NUM } from '@constants/config'
import { filter, map } from 'rxjs/operators'

const pagewin = (action$, state) => action$.pipe(
	ofType(DUMMY),
	filter(() => {
		if (state.value.page === 1) return true
		return false
	}),
	map(() => ({
		type: PAGE_NUM,
		page: state.value.page + 1,
	})),
)

export default pagewin
