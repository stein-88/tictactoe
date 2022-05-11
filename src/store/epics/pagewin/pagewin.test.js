import { DUMMY, PAGE_NUM } from '@constants/config'
import { TestScheduler } from 'rxjs/testing'
import pagewin from './pagewin'

describe('Test on epics', () => {
    test('Page should be Null', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
            // somehow assert the two objects are equal
            // e.g. with chai `expect(actual).deep.equal(expected)`
            expect(actual[0].notification).toEqual(expected[0].notification)
        })
        testScheduler.run(({ hot, _, expectObservable }) => {
            const action$ = hot('-a', {
                a: { type: DUMMY }
            })
            const state$ = {
                value: {
                    page: 1
                }
            }
            const output$ = pagewin(action$, state$)
            expectObservable(output$).toBe('---a', {
                a: {
                    type: PAGE_NUM,
                    page: state$.value.page + 1,
                }
            })
        })
    })
    test('Page should be Null', () => {
        const testScheduler = new TestScheduler((_, expected) => {
            expect(expected[0].notification.value).toBeNull()
        })
        testScheduler.run(({ hot, _, expectObservable }) => {
            const action$ = hot('-a', {
                a: { type: DUMMY }
            })
            const state$ = {
                value: {
                    page: 33
                }
            }
            const output$ = pagewin(action$, state$)
            expectObservable(output$).toBe('---a', {
                a: null
            })
        })
    })
})