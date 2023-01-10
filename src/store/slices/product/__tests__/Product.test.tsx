import store from '@/store'
import { reducer } from '..'
import { products } from '@/constants/productData'

const initialState = {
  productList: products,
  snack: [],
  drink: [],
  bakery: [],
  popular: [],
}

describe('Product redux and reducer slice', () => {
  it('Initial state should equal store state', () => {
    const storeState = store.getState()
    expect(storeState.product).toEqual(initialState)
  })

  it('call dispatch when setProductList', () => {
    const action = { type: `product/setProductList`, payload: [] }
    const state = reducer(
      {
        ...initialState,
        productList: products,
      },
      action
    )
    const newState = {
      ...initialState,
      productList: [],
    }
    expect(state).toEqual(newState)
  })

  it('call dispatch when setProductSnack', () => {
    const action = { type: `product/setProductSnack`, payload: products }
    const state = reducer(
      {
        ...initialState,
        snack: [],
      },
      action
    )
    const newState = {
      ...initialState,
      snack: products,
    }
    expect(state).toEqual(newState)
  })

  it('call dispatch when setProductDrink', () => {
    const action = { type: `product/setProductDrink`, payload: products }
    const state = reducer(
      {
        ...initialState,
        drink: [],
      },
      action
    )
    const newState = {
      ...initialState,
      drink: products,
    }
    expect(state).toEqual(newState)
  })

  it('call dispatch when setProductBakery', () => {
    const action = { type: `product/setProductBakery`, payload: products }
    const state = reducer(
      {
        ...initialState,
        bakery: [],
      },
      action
    )
    const newState = {
      ...initialState,
      bakery: products,
    }
    expect(state).toEqual(newState)
  })

  it('call dispatch when setProducPopular', () => {
    const action = { type: `product/setProducPopular`, payload: products }
    const state = reducer(
      {
        ...initialState,
        popular: [],
      },
      action
    )
    const newState = {
      ...initialState,
      popular: products,
    }
    expect(state).toEqual(newState)
  })
})
