import React from 'react'
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'

import ProductCard from '..'

import { initProduct } from '@/constants/productData'
import { products } from '@/constants/productData'
import { product } from '@/interfaces/product'
import {
  productCardMinusBtnTestID,
  productCardPlusBtnTestID,
  productCardTestID,
  modalTestID,
  productCardAddToCartBtnTestID,
} from '@/constants/testID'

const ProductCardWithStore = (mockStore: any, initProduct: product) => (
  <BrowserRouter>
    <reactRedux.Provider store={mockStore}>
      <ProductCard product={initProduct} />
    </reactRedux.Provider>
  </BrowserRouter>
)

const mockData = {
  product: {
    productList: products,
    snack: [],
    drink: [],
    bakery: [],
    popular: [],
  },
  cart: {
    items: [],
    total: 0,
  },
}

describe('ProductCard', () => {
  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  it('Snapshot', () => {
    const mockImageProcessingState = { ...mockData }
    const mockStore = configureStore({ reducer: (state = mockImageProcessingState) => state })
    const container = render(ProductCardWithStore(mockStore, initProduct))
    expect(container).toMatchSnapshot()
  })

  it('Should work when stock is 0', () => {
    const mockProduct = { id: 99, name: '', price: 0, type: [''], img: '', remaining: 0, isPopular: false, detail: '', quantity: 0 }
    const mockImageProcessingState = {
      ...mockData,
      product: {
        ...mockData.product,
        productList: [...mockData.product.productList, { ...mockProduct }],
      },
    }
    const mockStore = configureStore({ reducer: (state = mockImageProcessingState) => state })
    const { getByTestId } = render(ProductCardWithStore(mockStore, mockProduct))
    fireEvent.click(getByTestId(productCardTestID))
  })

  it('Should work when click plus and minus button', async () => {
    const mockImageProcessingState = { ...mockData }
    const mockStore = configureStore({ reducer: (state = mockImageProcessingState) => state })
    const { getByTestId } = render(ProductCardWithStore(mockStore, initProduct))
    fireEvent.click(getByTestId(productCardTestID))
    await waitFor(() => {
      expect(getByTestId(modalTestID)).toBeInTheDocument()
      fireEvent.click(getByTestId(productCardPlusBtnTestID))
      fireEvent.click(getByTestId(productCardMinusBtnTestID))
    })
  })

  it('Should work when click add to cart', async () => {
    const mockImageProcessingState = { ...mockData }
    const mockStore = configureStore({ reducer: (state = mockImageProcessingState) => state })
    const { getByTestId } = render(ProductCardWithStore(mockStore, initProduct))
    fireEvent.click(getByTestId(productCardTestID))
    await waitFor(() => {
      expect(getByTestId(modalTestID)).toBeInTheDocument()
      fireEvent.click(getByTestId(productCardAddToCartBtnTestID))
    })
  })
})
