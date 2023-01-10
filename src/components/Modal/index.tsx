import Button from '../Button'

import { ModalProps } from '@/interfaces/component'

import { modalTestID, modalCloseBtnTestID } from '@/constants/testID'

import ModalStyled from './styled'

const Modal = ({ children, setIsShow, isShow }: ModalProps) => {
  const handleCloseModal = () => setIsShow(false)
  return isShow ? (
    <ModalStyled className="flex justify-center align-center" data-testid={modalTestID}>
      <div onClick={handleCloseModal} className="back-drop"></div>
      <div className="modal">
        <Button
          testID={modalCloseBtnTestID}
          textIcon
          outline
          text={<span className="icon-close" />}
          className="close-btn"
          onClick={handleCloseModal}
        />
        {children}
      </div>
    </ModalStyled>
  ) : null
}

export default Modal
