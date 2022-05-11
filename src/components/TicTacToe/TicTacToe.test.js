import React from 'react'
import renderer from 'react-test-renderer'
import TicTacToe from './TicTacToe'
import * as reactRedux from 'react-redux'
import configureStore from '../../store'
import schema from './StartGame/data'
const { players } = schema
const { Provider } = reactRedux
reactRedux.useDispatch = () => jest.fn()

jest.mock('uuid', () => ({ v4: () => `uniquekey${Math.random(1000) * 100}` }))

describe('Test on TicTacToe Component', () => {
	test('Should render without props and start on StartGame page', () => {
		const compTicTacToe = renderer.create(
			<Provider store={configureStore()}>
				<TicTacToe />
			</Provider>
		)
		const jsonTicTacToe = compTicTacToe.toJSON()
		const Result = compTicTacToe.root.findAllByProps({
			['data-test']: 'players'
		})
		const Results = compTicTacToe.root.findAllByProps({
			className: 'btnstyle'
		})[0]
		Results.props.onClick()
		expect(Result).toHaveLength(players.length)
		expect(jsonTicTacToe).toMatchSnapshot()
	})
	test('Sould render gamepage inside of tictoctoe', () => {
		const store = configureStore()
		store.getState().page = 2
		const compTicTacToe = renderer.create(
			<Provider store={store}>
				<TicTacToe />
			</Provider>
		)
		const jsonTicTacToe = compTicTacToe.toJSON()
		const Result = compTicTacToe.root.findAllByProps({
			['data-testrefer']: ''
		})[0]
		Result.props.onClick()
		expect(jsonTicTacToe).toMatchSnapshot()
	})
	test('handleDispatch should return null', () => {
		const store = configureStore()
		store.getState().page = 2
		const compTicTacToe = renderer.create(
			<Provider store={store}>
				<TicTacToe />
			</Provider>
		)
		const jsonTicTacToe = compTicTacToe.toJSON()
		const Result = compTicTacToe.root.findAllByProps({
			['data-testrefer']: ''
		})[0]
		store.getState().game.currentPlayer = null
		Result.props.onClick()
		expect(jsonTicTacToe).toMatchSnapshot()
	})
	test('Should render endGame inside tictactoe', () => {
		const store = configureStore()
		store.getState().page = 3
		store.getState().game = {
			winner: 'Tie'
		}
		const compTicTacToe = renderer.create(
			<Provider store={store}>
				<TicTacToe />
			</Provider>
		)
		const jsonTicTacToe = compTicTacToe.toJSON()
		const Result = compTicTacToe.root.findAllByProps({
			className: 'btnstyle'
		})[0]
		Result.props.onClick()
		expect(jsonTicTacToe).toMatchSnapshot()
	})
})