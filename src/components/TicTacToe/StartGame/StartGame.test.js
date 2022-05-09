import React from 'react'
import renderer from 'react-test-renderer'
import StartGame from './StartGame'
import schema from './data'
const { players, titulo } = schema
const verify = [titulo]

describe('Test on StartGame Component', () => {
	const mockFunc = jest.fn()
	const compStartGame = renderer.create(<StartGame changeToPage={mockFunc} />)

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
		Result[0].props.onClick()
		expect(mockFunc).toHaveBeenCalled()
		expect(Result).toHaveLength(1)
	})
})
