import React from 'react'
import renderer from 'react-test-renderer'
import Gaming from './Gaming'

jest.mock('uuid', () => ({ v4: () => `uniquekey${Math.random(1000) * 100}` }))

const fullProps = {
	resetGame: () => null,
	currentPlayer: 'X',
	board: Array(3).fill(Array(3).fill(null)),
	handleDispatch: () => null
}
const { resetGame, currentPlayer, board, handleDispatch } = fullProps

describe('Test on Gaming Component', () => {
	test('Should not render without props', () => {
		const compGaming = renderer.create(<Gaming />)
		const jsonGaming = compGaming.toJSON()
		expect(jsonGaming).toBeNull()
	})
	test('Should not render with resetGame props only', () => {
		const compGaming = renderer.create(<Gaming resetGame={resetGame} />)
		const jsonGaming = compGaming.toJSON()
		expect(jsonGaming).toBeNull()
	})
	test('Should not render with currentPlayer props only', () => {
		const compGaming = renderer.create(<Gaming currentPlayer={currentPlayer} />)
		const jsonGaming = compGaming.toJSON()
		expect(jsonGaming).toBeNull()
	})
	test('Should not render with board props only', () => {
		const compGaming = renderer.create(<Gaming board={board} />)
		const jsonGaming = compGaming.toJSON()
		expect(jsonGaming).toBeNull()
	})
	test('Should not render with handleDispatch props only', () => {
		const compGaming = renderer.create(<Gaming handleDispatch={handleDispatch} />)
		const jsonGaming = compGaming.toJSON()
		expect(jsonGaming).toBeNull()
	})
	test('Should not render with 3 props only', () => {
		const compGaming = renderer.create(
			<Gaming
				handleDispatch={handleDispatch}
				board={board}
				currentPlayer={currentPlayer}
			/>
		)
		const jsonGaming = compGaming.toJSON()
		expect(jsonGaming).toBeNull()
	})
	test('Should render with full props', () => {
		const compGaming = renderer.create(<Gaming {...fullProps} />)
		const jsonGaming = compGaming.toJSON()
		expect(jsonGaming).toMatchSnapshot()
	})
	test('Should have 3 noCursor', () => {
		const mockFunc = jest.fn()
		const compGaming = renderer.create(
			<Gaming
				resetGame={resetGame}
				handleDispatch={handleDispatch}
				board={[
					[null, null, 'X'],
					[null, null, 'O'],
					['O', null, null]
				]}
				currentPlayer={currentPlayer}
			/>
		)
		const resultFinal = compGaming.root.findAllByProps({ ['data-testrefer']: 'noCursor' })
		const resultFim = compGaming.root.findAllByProps({ ['data-testrefer']: '' })
		resultFinal[0].props.onClick()
		resultFim[0].props.onClick()
		expect(mockFunc).not.toHaveBeenCalled()
		expect(resultFinal).toHaveLength(3)
	})
})