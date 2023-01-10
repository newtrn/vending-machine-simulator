import { useNavigate } from 'react-router-dom'

import Button from '@/components/Button'
import Money from '@/components/Money'

import { FINISH_PAGE_PATH, HOME_PAGE_PATH } from '@/constants/routes'
import { allMoneyType } from '@/constants/moneyData'

import useMoneyOperation from '@/hooks/useMoneyOperation'
import useProductOperation from '@/hooks/useProductOperation'

import PaymentStyled from './styled'

const Payment = () => {
  const navigate = useNavigate()
  const { insertedMoneyData, handleInsertedMoney, insertedMoneyTotalData, notEnoughMoney, resetInsertMoney, getChangedMoney, setNotEnoughMoney } =
    useMoneyOperation()
  const { cartTotalData } = useProductOperation()

  const handleCancelAndRefund = () => {
    resetInsertMoney()
    setNotEnoughMoney(false)
    navigate(HOME_PAGE_PATH)
  }

  return (
    <PaymentStyled>
      <div className="payment-section">
        <div className="section-title">Payment</div>
        <div className="money-inserted-wrapper">
          {Object.keys(insertedMoneyData).map((moneyInsert) => {
            if (insertedMoneyData[moneyInsert] > 0) return <Money key={moneyInsert} listMoney={insertedMoneyData} money={moneyInsert} />
          })}
        </div>
        <div className="money-change-wrapper">
          {insertedMoneyTotalData - cartTotalData > 0 ? (
            <div className="sub-section-title">Money change: ฿ {insertedMoneyTotalData - cartTotalData}</div>
          ) : (
            <div className="sub-section-title">Please insert more money: ฿ {cartTotalData - insertedMoneyTotalData}</div>
          )}
        </div>
        <div className="divider" />
        <div className="sub-section-title">Please insert the money</div>
        <div className="money-wrapper">
          {allMoneyType.map((moneyType) => (
            <Button key={`type-${moneyType}`} onClick={() => handleInsertedMoney(moneyType)} text={moneyType} />
          ))}
        </div>
        <div className="divider" />
        {insertedMoneyTotalData - cartTotalData > 0 && !notEnoughMoney && (
          <Button className="go-next-btn" onClick={() => navigate(FINISH_PAGE_PATH)} text="Finish payment and get goods" />
        )}
        {notEnoughMoney && (
          <>
            <div className="sub-section-title">
              <span className="icon-alert" />
              Sorry, we have no enough money to change. Please get your cash back from insert channel
            </div>
            <Button danger className="go-next-btn" onClick={handleCancelAndRefund} text="Back to home" />
          </>
        )}
        {insertedMoneyTotalData > 0 && !notEnoughMoney && (
          <Button danger className="go-next-btn" onClick={handleCancelAndRefund} text="Cancel and refund" />
        )}
      </div>
    </PaymentStyled>
  )
}

export default Payment
