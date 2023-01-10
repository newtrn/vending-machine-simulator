import { useEffect, useState } from 'react'
import clsx from 'clsx'

import Modal from '../../../../components/Modal'
import Button from '../../../../components/Button'

import useProductOperation from '@/hooks/useProductOperation'

import { product } from '@/interfaces/product'
import { ProductCardProps } from '@/interfaces/component'

import { initProduct } from '@/constants/productData'
import { productCardPlusBtnTestID, productCardMinusBtnTestID, productCardTestID, productCardAddToCartBtnTestID } from '@/constants/testID'

import { ProductModalStyled } from '../../../../components/Modal/styled'
import ProductCardStyled from './styled'

const ProductCard = ({ product }: ProductCardProps) => {
  const { handleAddItemToCart, productListData } = useProductOperation()

  const getSelectedProduct = () => productListData?.find((item: product) => item.id === product.id) || initProduct

  const [selectedProduct, setSelectedProduct] = useState<product>(getSelectedProduct())
  const [quantity, setQuantity] = useState<number>(selectedProduct.remaining === 0 ? 0 : 1)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  useEffect(() => {
    setSelectedProduct(getSelectedProduct())
    setQuantity(selectedProduct.remaining === 0 ? 0 : 1)
  }, [isShowModal, selectedProduct.remaining])

  useEffect(() => {
    setSelectedProduct(getSelectedProduct())
  }, [productListData])

  const handleAddItemToCartClicked = () => {
    handleAddItemToCart(selectedProduct, quantity)
    setIsShowModal(false)
  }

  const handleItemClicked = () => {
    if (selectedProduct.remaining > 0) setIsShowModal(true)
  }

  const getProductModal = () => (
    <Modal isShow={isShowModal} setIsShow={setIsShowModal}>
      <ProductModalStyled>
        <div className="detail-wrapper">
          <img className="product-img" src={selectedProduct.img} />
          <div className="details">
            <div className="name">{selectedProduct.name}</div>
            <div className="detail">{selectedProduct.detail}</div>
            <div className="price">฿ {selectedProduct.price}</div>
          </div>
        </div>
        <div className="operate-wrapper justify-center align-center flex">
          <div className="quantity-wrapper flex">
            <div className="flex">
              <Button
                testID={productCardMinusBtnTestID}
                text={<span className="icon-minus" />}
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
                textIcon
              />
              <div className="quantity">{quantity}</div>
              <Button
                testID={productCardPlusBtnTestID}
                text={<span className="icon-plus" />}
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity === selectedProduct.remaining || quantity > selectedProduct.remaining}
                textIcon
              />
            </div>
          </div>
          <Button testID={productCardAddToCartBtnTestID} text="Add to cart" onClick={handleAddItemToCartClicked} />
        </div>
      </ProductModalStyled>
    </Modal>
  )

  return (
    <>
      {getProductModal()}
      <ProductCardStyled
        data-testid={productCardTestID}
        className={clsx('flex justify-center align-center', selectedProduct.remaining === 0 && 'disabled')}
        onClick={handleItemClicked}
      >
        <img className="product-img" src={product.img} />
      </ProductCardStyled>
    </>
  )
}

export default ProductCard
