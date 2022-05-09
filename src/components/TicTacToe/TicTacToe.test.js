import React from 'react'
import renderer from 'react-test-renderer'
import TicTacToe from './TicTacToe'
import { Provider } from 'react-redux'
import configureStore from '../../store'
import schema from './StartGame/data'
const { players } = schema
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
		expect(Result).toHaveLength(players.length)
		expect(jsonTicTacToe).toMatchSnapshot()
	})
})