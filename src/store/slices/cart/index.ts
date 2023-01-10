import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { product } from '@/interfaces/product'
import { CartState } from '@/interfaces/redux'

const initialState = {
  items: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, { payload }) => {
      state.items = payload
    },
    setCartTotal: (state, { payload }) => {
      state.total = payload
    }
  }
})

export const reducer = cartSlice.reducer

const { actions } = cartSlice
export const { setCartItems, setCartTotal } = actions