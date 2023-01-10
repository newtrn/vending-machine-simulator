import styled from 'styled-components'

import { colors } from '@/constants/colors'

export default styled.div`
.money-type-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  .money-type {
    padding: 0 1rem;
    max-width: 80px;
    height: 40px;
    background-color: #FFB933;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    border: 1px solid #FFB933;
    background-color: ${colors.primaryOrange};
  }
  .money-type-amount {
    font-weight: 700;
    font-size: 20px;
    margin-left: 0.5rem;
  }
}
`