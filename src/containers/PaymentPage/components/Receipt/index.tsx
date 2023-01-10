import { useNavigate } from 'react-router-dom'

import Button from '@/components/Button'
import { product } from '@/interfaces/product'
import { HOME_PAGE_PATH } from '@/constants/routes'
import useProductOperation from '@/hooks/useProductOperation'

import ReceiptStyled from './styled'

const Receipt = () => {
  const navigate = useNavigate()

  const { cartItemsData, cartTotalData } = useProductOperation()

  return (
    <ReceiptStyled>
      <div className="cart-section">
        <div className="cart-items-section">
          <div className="flex align-center section-title">
            <Button className="back-btn" onClick={() => navigate(HOME_PAGE_PATH)} text={<span className="icon-back" />} textIcon />
            <div>Receipt</div>
          </div>
          {cartItemsData.map((item: product) => (
            <div className="cart-item" key={`cart-item-` + item.id}>
              <div className="cart-item-img">
                <img src={item.img} />
              </div>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-quantity flex">
                <div className="quantity">{item.quantity}</div>
              </div>
              <div className="cart-item-price">฿ {item.quantity * item.price}</div>
            </div>
          ))}
        </div>
        <div className="cart-total-section">
          <div className="section-title cart-total">Total: ฿ {cartTotalData}</div>
        </div>
      </div>
    </ReceiptStyled>
  )
}

export default Receipt
