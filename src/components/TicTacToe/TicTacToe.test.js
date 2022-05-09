import React from 'react'
import renderer from 'react-test-renderer'
import TicTacToe from './TicTacToe'
import StartGame from './StartGame'
import { Provider } from 'react-redux'
import configureStore from '../../store'
import schema from './StartGame/data'
const { players, titulo } = schema
const verify = [titulo]

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
describe('Test on StartGame Component', () => {
	const compStartGame = renderer.create(<StartGame changeToPage={() => null} />)

	test('Should not render without props', () => {
		const compStartGame = renderer.create(<StartGame />)
		const jsonStartGame = compStartGame.toJSON()
		expect(jsonStartGame).toBeNull()
	})
	test('Should render with props and have 2players only', () => {
		const jsonStartGame = compStartGame.toJSON()
		const Result = compStartGame.root.findAllByProps({
			['data-test']: 'players'
		})
		expect(jsonStartGame).toMatchSnapshot()
		expect(Result).toHaveLength(players.length)
	})
	test('The component should have just 1 title h1', () => {
		const Result = compStartGame.root.findAllByProps({ className: 'h1 pb-5' })
		expect(Result).toHaveLength(verify.length)
	})
	test('Should have 1 buttom with aria-hidden', () => {
		const Result = compStartGame.root.findAllByProps({ className: 'btnstyle' })
		const checkAria = compStartGame.root.findAllByProps({ ['aria-hidden']: "true" })
		expect(Result).toHaveLength(1)
		expect(checkAria).toHaveLength(1)
	})
})