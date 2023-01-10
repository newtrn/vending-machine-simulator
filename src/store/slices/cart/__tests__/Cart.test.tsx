import store from '@/store'
import { reducer } from '..'
import { initProduct } from '@/constants/productData'

const initialState = {
  items: [],
  total: 0,
}

describe('Cart redux and reducer slice', () => {
  it('Initial state should equal store state', () => {
    const storeState = store.getState()
    expect(storeState.cart).toEqual(initialState)
  })

  it('call dispatch when setCartItems', () => {
    const action = { type: `cart/setCartItems`, payload: initProduct }
    const state = reducer(
      {
        ...initialState,
        items: [],
      },
      action
    )
    const newState = {
      ...initialState,
      items: initProduct,
    }
    expect(state).toEqual(newState)
  })

  it('call dispatch when setCartTotal', () => {
    const action = { type: `cart/setCartTotal`, payload: 1 }
    const state = reducer(
      {
        ...initialState,
        total: 0,
      },
      action
    )
    const newState = {
      ...initialState,
      total: 1,
    }
    expect(state).toEqual(newState)
  })
})
