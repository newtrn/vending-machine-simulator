import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { setCartItems, setCartTotal } from '@/store/slices/cart'
import { setProductList, setProductSnack, setProductDrink, setProductBakery, setProducPopular } from '@/store/slices/product'

import { productTypes } from '@/constants/productData'

import { product } from '@/interfaces/product'
import { RootState } from '@/interfaces/redux'

const useProductOperation = () => {
  const dispatch = useDispatch()

  const productData = useSelector((state: RootState) => state.product)
  const productListData = useSelector((state: RootState) => state.product.productList)
  const cartItemsData = useSelector((state: RootState) => state.cart.items)
  const cartTotalData = useSelector((state: RootState) => state.cart.total)

  const [numberItemIncart, setNumberItemInCart] = useState<number>(0)

  useEffect(() => {
    dispatch(setCartTotal(calculateTotalPrice()))

    const newNumberItemInCart = cartItemsData.reduce((acc: number, item: product) => acc + item.quantity, 0)
    setNumberItemInCart(newNumberItemInCart)
  }, [cartItemsData])

  useEffect(() => {
    separateProductFromType()
  }, [productListData])

  const resetCartItems = () => {
    dispatch(setCartItems([]))
  }

  const separateProductFromType = () => {
    const snack = productListData.filter((product: product) => product.type.includes(productTypes.snack))
    const drink = productListData.filter((product: product) => product.type.includes(productTypes.drink))
    const bakery = productListData.filter((product: product) => product.type.includes(productTypes.bakery))
    const poppular = productListData.filter((product: product) => product.isPopular)

    dispatch(setProductSnack(snack))
    dispatch(setProductDrink(drink))
    dispatch(setProductBakery(bakery))
    dispatch(setProducPopular(poppular))
  }

  const handleReduceProductRemaining = (selectedItem: product, quantity: number) => {
    const newProductList = productListData.map((item: product) => {
      if (item.id === selectedItem.id) {
        return { ...item, remaining: item.remaining - quantity }
      }
      return item
    })
    dispatch(setProductList(newProductList))
  }

  const handleIncreaseProductRemaining = (selectedItem: product, quantity: number) => {
    const newProductList = productListData.map((item: product) => {
      if (item.id === selectedItem.id) {
        return { ...item, remaining: item.remaining + quantity }
      }
      return item
    })
    dispatch(setProductList(newProductList))
  }

  const handleAddItemToCart = (addedItem: product, quantity: number) => {
    const isProductAlreadyInCart = cartItemsData.find((item: product) => item.id === addedItem.id)
    if (isProductAlreadyInCart) {
      const newCartItems = cartItemsData.map((item: product) =>
        item.id === addedItem.id ? { ...item, quantity: item.quantity + quantity, remaining: undefined } : item
      )
      dispatch(setCartItems(newCartItems))
    } else {
      dispatch(setCartItems([...cartItemsData, { ...addedItem, quantity: quantity, remaining: undefined }]))
    }
    handleReduceProductRemaining(addedItem, quantity)
  }

  const calculateTotalPrice = () => cartItemsData.reduce((acc: number, item: product) => acc + item.price * item.quantity, 0)

  const handleIncreaseItemAmountInCart = (selectedItem: product) => {
    const newCartItem = cartItemsData.map((item: product) => {
      if (item.id === selectedItem.id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    // update product list after add item to cart
    const newProductListItem = productListData.map((item: product) => {
      if (item.id === selectedItem.id) {
        return { ...item, remaining: item.remaining - 1 }
      }
      return item
    })
    dispatch(setCartItems(newCartItem))
    dispatch(setProductList(newProductListItem))
  }

  const handleDecreaseItemAmountInCart = (selectedItem: product) => {
    const newCartItem = cartItemsData.map((item: product) => {
      if (item.id === selectedItem.id) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    // update product list after add item to cart
    const newProductListItem = productListData.map((item: product) => {
      if (item.id === selectedItem.id) {
        return { ...item, remaining: item.remaining + 1 }
      }
      return item
    })
    dispatch(setCartItems(newCartItem))
    dispatch(setProductList(newProductListItem))
  }

  const handleRemoveItemInCart = (selectedItem: product) => {
    const newCartItem = cartItemsData.filter((item: product) => item.id !== selectedItem.id)
    dispatch(setCartItems(newCartItem))
    handleIncreaseProductRemaining(selectedItem, selectedItem.quantity)
  }

  return {
    separateProductFromType,
    handleReduceProductRemaining,
    handleAddItemToCart,
    productData,
    productListData,
    cartItemsData,
    cartTotalData,
    handleIncreaseItemAmountInCart,
    handleDecreaseItemAmountInCart,
    handleRemoveItemInCart,
    resetCartItems,
    numberItemIncart,
  }
}

export default useProductOperation
