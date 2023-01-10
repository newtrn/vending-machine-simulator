import store from '@/store'
import { reducer } from '..'
import { initialInsertedMoney, moneyRemaining } from '@/constants/moneyData'

const initialState = {
  remainingMoney: moneyRemaining,
  insertedMoney: initialInsertedMoney,
  totalInsertMoney: 0,
}

describe('Money redux and reducer slice', () => {
  it('Initial state should equal store state', () => {
    const storeState = store.getState()
    expect(storeState.money).toEqual(initialState)
  })

  it('call dispatch when setMoneyRemaining', () => {
    const action = { type: `money/setMoneyRemaining`, payload: moneyRemaining }
    const state = reducer(
      {
        ...initialState,
        remainingMoney: initialInsertedMoney,
      },
      action
    )
    const newState = {
      ...initialState,
      remainingMoney: moneyRemaining,
    }
    expect(state).toEqual(newState)
  })

  it('call dispatch when setInsertedMoney', () => {
    const action = { type: `money/setInsertedMoney`, payload: moneyRemaining }
    const state = reducer(
      {
        ...initialState,
        insertedMoney: initialInsertedMoney,
      },
      action
    )
    const newState = {
      ...initialState,
      insertedMoney: moneyRemaining,
    }
    expect(state).toEqual(newState)
  })

  it('call dispatch when setTotalInsertMoney', () => {
    const action = { type: `money/setTotalInsertMoney`, payload: 1 }
    const state = reducer(
      {
        ...initialState,
        totalInsertMoney: 0,
      },
      action
    )
    const newState = {
      ...initialState,
      totalInsertMoney: 1,
    }
    expect(state).toEqual(newState)
  })
})
