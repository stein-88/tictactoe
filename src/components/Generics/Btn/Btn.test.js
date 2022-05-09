import React from 'react'
import renderer from 'react-test-renderer'
import Btn from './Btn'

describe('Test on Btn Component', () => {
    test('Should not render without props', () => {
        const compBtn = renderer.create(<Btn />)
        const jsonBtn = compBtn.toJSON()
        expect(jsonBtn).toBeNull()
    })
    test('Should not render with onClick only', () => {
        const compBtn = renderer.create(<Btn onClick={() => null} />)
        const jsonBtn = compBtn.toJSON()
        expect(jsonBtn).toBeNull()
    })
    test('Should not render with text only', () => {
        const compBtn = renderer.create(<Btn text="botaoo" />)
        const jsonBtn = compBtn.toJSON()
        expect(jsonBtn).toBeNull()
    })
    test('Should render with text and onClick', () => {
        const compBtn = renderer.create(<Btn text="botaoo" onClick={() => null} />)
        const jsonBtn = compBtn.toJSON()
        expect(jsonBtn).toMatchSnapshot()
    })
    test('Should change customClass', () => {
        const mockFunc = jest.fn()
        const compBtn = renderer.create(<Btn text="botaoo" customClass="abobrinha" onClick={mockFunc} />)
        const result = compBtn.root.findAllByProps({ className: 'abobrinha' })
        result[0].props.onClick()
        expect(mockFunc).toHaveBeenCalled()
        expect(result).toHaveLength(1)
    })
    test('Should add btnoff to className when we have disablebtn', () => {
        const mockFunc = jest.fn()
        const compBtn = renderer.create(<Btn text="botaoo" disabledbtn={true} onClick={mockFunc} />)
        const expectResult = compBtn.root.findAllByProps({ className: 'btnoff btnstyle' })
        expectResult[0].props.onClick()
        expect(mockFunc).not.toHaveBeenCalled()
        expect(expectResult).toHaveLength(1)
    })
    test('Should have an ID', () => {
        const compBtn = renderer.create(<Btn text="botaoo" id="tecladoGamerTeclaBaixa" onClick={() => null} />)
        const expectResult = compBtn.root.findAllByProps({ ['data-test']: "tecladoGamerTeclaBaixa" })
        expect(expectResult).toHaveLength(1)
    })
})