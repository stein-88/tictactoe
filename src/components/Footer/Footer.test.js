import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

describe('Test on Footer Component', () => {
    const compFooter = renderer.create(<Footer />)
    test('Sould render with no props', () => {
        const jsonFooter = compFooter.toJSON()
        expect(jsonFooter).toMatchSnapshot()
    })
    test('Sould have a text', () => {
        const Result = compFooter.root.findAllByProps({ className: "py-5 text-center text-white" })
        expect(Result).toHaveLength(1)
    })
})