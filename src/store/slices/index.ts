import { reducer as cartReducer} from '@/store/slices/cart'
import { reducer as productReducer} from '@/store/slices/product'
import { reducer as moneyReducer } from '@/store/slices/money'

import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  money: moneyReducer
})

export default rootReducer