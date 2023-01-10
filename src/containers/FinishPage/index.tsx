import { useNavigate } from 'react-router-dom'

import useMoneyOperation from '@/hooks/useMoneyOperation'
import useProductOperation from '@/hooks/useProductOperation'
import Money from '@/components/Money'

import FinishStyled from './styled'
import { useState } from 'react'
import Button from '@/components/Button'
import { HOME_PAGE_PATH } from '@/constants/routes'

const FinishPage = () => {
  const navigate = useNavigate()

  const { getChangedMoney, resetInsertMoney, reduceMoneyInSystem } = useMoneyOperation()
  const { resetCartItems } = useProductOperation()

  const [changeMoney, setChangMoney] = useState(getChangedMoney())

  const handleContinue = () => {
    resetCartItems()
    resetInsertMoney()
    reduceMoneyInSystem()
    navigate(HOME_PAGE_PATH)
  }

  return (
    <FinishStyled>
      <div className="change-section">
        <div className="section-title">Thank you and please get your changed.</div>
        <div className="money-list-wrapper">
          {Object.keys(changeMoney).map((moneyInsert) => {
            if (changeMoney[moneyInsert] > 0) return <Money listMoney={changeMoney} money={moneyInsert} />
          })}
        </div>
        <div className="divider" />
        <Button className="continue-btn" text="Continue shopping" onClick={handleContinue} />
      </div>
    </FinishStyled>
  )
}

export default FinishPage
