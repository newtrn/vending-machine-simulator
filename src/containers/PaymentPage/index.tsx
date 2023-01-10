import { useEffect } from 'react'

import Receipt from './components/Receipt'
import Payment from './components/Payment'

import useMoneyOperation from '@/hooks/useMoneyOperation'

import PaymentStyled from './styled'

const PaymentPage = () => {
  const { insertedMoneyTotalData, getChangedMoney } = useMoneyOperation()

  useEffect(() => {
    getChangedMoney()
  }, [insertedMoneyTotalData])

  return (
    <PaymentStyled>
      <Receipt />
      <Payment />
    </PaymentStyled>
  )
}

export default PaymentPage
