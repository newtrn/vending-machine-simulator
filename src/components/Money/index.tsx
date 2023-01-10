import { MoneyProps } from '@/interfaces/component'

import MoneyStyled from './styled'

const Money = ({ listMoney, money }: MoneyProps) => (
  <MoneyStyled>
    <div className="flex align-center money-type-row">
      <div className="money-type flex align-center justify-center">{money}</div>
      <div className="flex align-center justify-center">
        <span>x</span>
        <div className="money-type-amount">{listMoney[money]}</div>
      </div>
    </div>
  </MoneyStyled>
)

export default Money
