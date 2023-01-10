import { colors } from '@/constants/colors'
import styled from 'styled-components'

export default styled.div`
  .payment-section {
    max-width: 500px;
    margin: 0 auto;
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    .money-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 0.5rem;
      column-gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    .money-inserted-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .go-next-btn {
      max-width: unset;
      margin-bottom: 0.5rem;
    }
  }

  .icon-alert {
    color: ${colors.danger};
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 576px) {
    .payment-section {
      .money-wrapper {
        grid-template-columns: 1fr 1fr 1fr;
      }
      .money-inserted-wrapper {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`