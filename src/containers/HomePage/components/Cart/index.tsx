import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import Button from '@/components/Button'

import useProductOperation from '@/hooks/useProductOperation'

import { product } from '@/interfaces/product'
import { CartProps } from '@/interfaces/container'

import { PAYMENT_PAGE_PATH } from '@/constants/routes'

import CartStyled from './styled'

const Cart = ({ className }: CartProps) => {
  const navigate = useNavigate()
  const { cartItemsData, cartTotalData, productListData, handleIncreaseItemAmountInCart, handleDecreaseItemAmountInCart, handleRemoveItemInCart } =
    useProductOperation()

  const getProductRemaining = (selectedItem: product) => productListData.find((item: product) => item.id === selectedItem.id)?.remaining

  return (
    <CartStyled className={clsx(className && className)}>
      <div>
        <div className="section-title">Your cart</div>
        <div className="cart-items-section">
          {cartItemsData.map((item: product) => (
            <div className="cart-item" key={`cart-item-` + item.id}>
              <div className="cart-item-img">
                <img src={item.img} />
              </div>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-quantity flex">
                <Button
                  className="plus-btn"
                  onClick={() => handleDecreaseItemAmountInCart(item)}
                  text={<span className="icon-minus" />}
                  textIcon
                  outline
                  disabled={item.quantity === 1}
                />
                <div className="quantity">{item.quantity}</div>
                <Button
                  className="minus-btn"
                  onClick={() => handleIncreaseItemAmountInCart(item)}
                  text={<span className="icon-plus" />}
                  textIcon
                  outline
                  disabled={getProductRemaining(item) === 0}
                />
              </div>
              <div className="cart-item-price">฿ {item.quantity * item.price}</div>
              <div>
                <Button className="remove-btn" onClick={() => handleRemoveItemInCart(item)} text={<span className="icon-close" />} textIcon outline />
              </div>
            </div>
          ))}
        </div>
      </div>

      {cartItemsData.length !== 0 && (
        <div className="cart-total-section">
          <div className="section-title cart-total">Total: ฿ {cartTotalData}</div>
          <Button text="Checkout" className="margin-center" disabled={cartItemsData.length === 0} onClick={() => navigate(PAYMENT_PAGE_PATH)} />
        </div>
      )}
    </CartStyled>
  )
}

export default Cart
