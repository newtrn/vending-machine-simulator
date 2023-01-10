import PepsiCan from '@/assets/images/products/pepsi_can.png'
import Lays from '@/assets/images/products/lays.png'
import Farmhouse from '@/assets/images/products/farmhouse.png'
import PepsiBig from '@/assets/images/products/pepsi_big.png'
import CokeCan from '@/assets/images/products/coke_can.png'
import CokeBig from '@/assets/images/products/coke_big.png'
import Water from '@/assets/images/products/water.png'
import FantaCan from '@/assets/images/products/fanta_can.png'
import Cheetos from '@/assets/images/products/cheetos.png'
import Doritos from '@/assets/images/products/doritos.png'
import Pringles from '@/assets/images/products/pringles.png'
import { product } from '@/interfaces/product'

export const products = [
  {
    id: 1,
    name: 'Pepsi 325 ml.',
    price: 13,
    type: ['drink'],
    img: PepsiCan,
    remaining: 5,
    isPopular: true,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 2,
    name: 'Pepsi 1500 ml.',
    price: 25,
    type: ['drink'],
    img: PepsiBig,
    remaining: 2,
    isPopular: false,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 3,
    name: `Lay's 42g.`,
    price: 22,
    type: ['snack'],
    img: Lays,
    remaining: 40,
    isPopular: true,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 4,
    name: 'Farmhouse',
    price: 24,
    type: ['bakery'],
    img: Farmhouse,
    remaining: 2,
    isPopular: false,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 5,
    name: 'Coke 325 ml.',
    price: 13,
    type: ['drink'],
    img: CokeCan,
    remaining: 32,
    isPopular: true,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 6,
    name: 'Coke 1500 ml.',
    price: 25,
    type: ['drink'],
    img: CokeBig,
    remaining: 45,
    isPopular: false,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 7,
    name: 'Water',
    price: 10,
    type: ['drink'],
    img: Water,
    remaining: 100,
    isPopular: true,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 8,
    name: 'Fanta orange',
    price: 15,
    type: ['drink'],
    img: FantaCan,
    remaining: 20,
    isPopular: true,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 9,
    name: 'Cheetos',
    price: 20,
    type: ['snack'],
    img: Cheetos,
    remaining: 20,
    isPopular: true,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 10,
    name: 'Doritos',
    price: 20,
    type: ['snack'],
    img: Doritos,
    remaining: 22,
    isPopular: true,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 11,
    name: 'Pringles',
    price: 42,
    type: ['snack'],
    img: Pringles,
    remaining: 54,
    isPopular: false,
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  }
]

export const productTypes = {
  drink: 'drink',
  snack: 'snack',
  bakery: 'bakery'
}

export const productTypesArray = ['drink', 'snack', 'bakery']

export const initProduct: product = {
  id: 1,
  name: '',
  price: 0,
  type: [''],
  img: Pringles,
  remaining: 0,
  isPopular: false,
  detail: '',
  quantity: 0
}
