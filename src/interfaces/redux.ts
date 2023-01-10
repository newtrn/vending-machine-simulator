import { product } from "./product"
import { moneyType } from "./money"

export interface RootState {
  cart: CartState
  money: MoneyState
  product: ProductState
}

export interface CartState {
  items: product[]
  total: number
}

export interface MoneyState {
  remainingMoney: moneyType,
  insertedMoney: moneyType,
  totalInsertMoney: 0
}

export interface ProductState {
  productList: product[],
  snack: product[],
  drink: product[],
  bakery: product[],
  popular: product[],
  [key:string]: product[]
}