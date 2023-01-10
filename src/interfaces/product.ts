import { ReactNode } from "react"

export interface product {
  id: number,
  name: string,
  price: number,
  type: string[],
  img: string,
  remaining: number,
  isPopular: boolean,
  detail: string,
  quantity: number
}