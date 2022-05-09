import React from 'react'
import renderer from 'react-test-renderer'
import EndGame from './EndGame'

describe('Test on EndGame Component', () => {
	test('Should not render without props', () => {
		const compEndGame = renderer.create(<EndGame />)
		const jsonEndGame = compEndGame.toJSON()
		expect(jsonEndGame).toBeNull()
	})
	test('Should render with props', () => {
		const compEndGame = renderer.create(<EndGame winner={'X'} />)
		const jsonEndGame = compEndGame.toJSON()
		expect(jsonEndGame).toMatchSnapshot()
	})
	test('Should render with props winner Tie the image have to be placarimg', () => {
		const compEndGame = renderer.create(<EndGame winner={'Tie'} />)
		const expectEnd = compEndGame.root.findAllByProps({ ['data-test']: "placarimg" })
		expect(expectEnd).toHaveLength(1)
	})
	test('Should render with props winner X or O the image to be champimg', () => {
		const compEndGameX = renderer.create(<EndGame winner={'X'} />)
		const compEndGameO = renderer.create(<EndGame winner={'O'} />)
		const expectEndX = compEndGameX.root.findAllByProps({ ['data-test']: "champimg" })
		const expectEndO = compEndGameO.root.findAllByProps({ ['data-test']: "champimg" })
		expect(expectEndX).toHaveLength(1)
		expect(expectEndO).toHaveLength(1)
	})
})