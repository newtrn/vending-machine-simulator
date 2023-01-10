import { ReactNode } from "react"

import { product } from "./product"

export interface ButtonProps {
  text: string | ReactNode,
  onClick: () => void,
  disabled?: boolean,
  textIcon?: boolean,
  className?: string,
  outline?: boolean,
  danger?: boolean,
  testID?: string
}

export interface ModalProps {
  children: ReactNode,
  setIsShow: (val: any) => void,
  isShow: boolean,
  testID?: string
}

export interface MoneyProps {
  listMoney: { [key: string]: number },
  money: string | number
}

export interface ProductCardProps {
  product: product
}

export interface ProductRowProps {
  prodcuctType: string
}