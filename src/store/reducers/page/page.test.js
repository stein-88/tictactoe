import {page} from './page'
import { PAGE_NUM, CURRENTLY_WINNER, TRY_AGAIN } from '@constants/config'
import * as action from '../../actions/moves'

describe('Testing reducer page', () => {
    test('Should start with state 1', () => {
        const expectAction = {
            type: PAGE_NUM,
            page: 2
        }
        const expecResult = page(1, expectAction)
        expect(expecResult).toEqual(expectAction.page)
    })
    test('State must to be 2', () => {
        const expectAction = action.resetBoard()
        const expecResult = page(2, expectAction)
        expect(expecResult).toEqual(expectAction.page)
    })
    test('State must to be 3', () => {
        const expectAction = {
            type: CURRENTLY_WINNER,
            page: 3
        }
        const expecResult = page(2, expectAction)
        expect(expecResult).toEqual(expectAction.page)
    })
    test('Initial state should return if did not find action type', () => {
        const expectAction = {
            type: 'Banana',
            page: 60
        }
        const expecResult = page(5, expectAction)
        expect(expecResult).toEqual(5)
    })
    test('Should return 2', () => {
        const expectAction = {
            type: TRY_AGAIN,
            page: 2
        }
        const expecResult = page(322, expectAction)
        expect(expecResult).toEqual(expectAction.page)
    })
})