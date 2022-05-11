import { SELECT_CELL, CURRENTLY_WINNER } from '@constants/config'
import { TestScheduler } from 'rxjs/testing'
import { checkWinner } from '@utils'
import pingWinner from './pingWinner'

const state$ = {
    value: {
        board: [
            ['X', 'X', 'X'],
            [null, null, 'O'],
            ['O', null, null]
        ],
        winner: null,
        page: 2
    }
}

describe('Test on epics', () => {
    test('Winner should be X', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual[0].notification).toEqual(expected[0].notification)
        })
        testScheduler.run(({ hot, _, expectObservable }) => {
            const action$ = hot('-a', {
                a: { type: SELECT_CELL }
            })
            const output$ = pingWinner(action$, state$)
            expectObservable(output$).toBe('---a', {
                a: {
                    type: CURRENTLY_WINNER,
                    winner: checkWinner(state$.value.board),
                    page: 3,
                }
            })
        })
    })
    test('Winner should be A Tie', () => {
        const testScheduler = new TestScheduler((_, expected) => {
            expect(expected[0].notification.value).toEqual(expected[0].notification.value)
        })
        testScheduler.run(({ hot, _, expectObservable }) => {
            const action$ = hot('-a', {
                a: { type: SELECT_CELL }
            })
            const state$ = {
                value: {
                    board: [
                        ['X', 'O', 'X'],
                        ['X', 'X', 'O'],
                        ['O', 'X', 'O']
                    ],
                    winner: null,
                    page: 2
                }
            }
            const output$ = pingWinner(action$, state$)
            expectObservable(output$).toBe('---a', {
                a: {
                    type: CURRENTLY_WINNER,
                    winner: checkWinner(state$.value.board),
                    page: 3,
                }
            })
        })
    })
})