import { createSlice } from '@reduxjs/toolkit'
import { products } from '@/constants/productData'

const initialState = {
  productList: products,
  snack: [],
  drink: [],
  bakery: [],
  popular: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductList: (state, { payload }) => {
      state.productList = payload
    },
    setProductSnack: (state, { payload }) => {
      state.snack = payload
    },
    setProductDrink: (state, { payload }) => {
      state.drink = payload
    },
    setProductBakery: (state, { payload }) => {
      state.bakery = payload
    },
    setProducPopular: (state, { payload }) => {
      state.popular = payload
    }
  }
})

export const reducer = productSlice.reducer

const { actions } = productSlice
export const { setProductList, setProductSnack, setProductDrink, setProductBakery, setProducPopular } = actions