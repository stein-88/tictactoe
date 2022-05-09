import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from '../store'

jest.mock('uuid', () => ({ v4: () => `uniquekey${Math.random(1000) * 100}` }))

describe('Test on App container', () => {
	test('Renderized with no props', () => {
		const compNoProps = renderer.create(
			<Provider store={configureStore()}>
				<App />
			</Provider>
		)
		const compJson = compNoProps.toJSON()
		expect(compJson).toMatchSnapshot()
	})
})