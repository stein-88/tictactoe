import { combineReducers } from 'redux'
import { board } from './board'
import { game } from './game'
import { page } from './page'

export default combineReducers({
	board,
	game,
	page,
})
