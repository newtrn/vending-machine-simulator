import { useState } from 'react'

import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Modal from '@/components/Modal'
import Button from '@/components/Button'

import useProductOperation from '@/hooks/useProductOperation'

import HomeStyled from './styled'

const HomePage = () => {
  const { numberItemIncart } = useProductOperation()

  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  return (
    <HomeStyled className="flex">
      <ProductList />
      <Cart className="desktop" />
      <div className="mobile">
        {numberItemIncart > 0 && <div className="cart-total-item-number flex justify-center align-center">{numberItemIncart}</div>}
        <Button className="cart-modal-btn" textIcon text={<span className="icon-cart" />} onClick={() => setIsShowModal(true)} />
      </div>
      <Modal isShow={isShowModal} setIsShow={setIsShowModal}>
        <Cart />
      </Modal>
    </HomeStyled>
  )
}

export default HomePage
