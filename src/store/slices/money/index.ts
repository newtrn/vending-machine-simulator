import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { moneyRemaining, initialInsertedMoney } from '@/constants/moneyData'
import { MoneyState } from '@/interfaces/redux'
import { moneyType } from '@/interfaces/money'

const initialState = {
  remainingMoney: moneyRemaining,
  insertedMoney: initialInsertedMoney,
  totalInsertMoney: 0
}

const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    setMoneyRemaining: (state, { payload }) => {
      state.remainingMoney = payload
    },
    setInsertedMoney: (state, { payload }) => {
      state.insertedMoney = payload
    },
    setTotalInsertMoney: (state, { payload }) => {
      state.totalInsertMoney = payload
    },
  }
})

export const reducer = moneySlice.reducer

const { actions } = moneySlice
export const { setMoneyRemaining, setInsertedMoney, setTotalInsertMoney } = actions
