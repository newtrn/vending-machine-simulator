import { colors } from '@/constants/colors'
import styled from 'styled-components'

export default styled.div`
  .cart-section {
    max-width: 500px;
    margin: 0 auto;
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    .cart-items-section {
      .back-btn {
        margin-right: 0.5rem;
      }
      .cart-item {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr;
        margin-bottom: 2rem;
        > div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cart-item-img {
          img {
            height: 50px;
          }
        }
        .cart-item-name {
          justify-content: flex-start;
        }
        .cart-item-quantity {
          .quantity {
            padding: 0 0.5rem;
          }
        }
      }
    }
    .cart-total-section {
      border-top: 1px solid #000000;
      padding-top: 2rem;
      .cart-total {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 2rem;
        margin-bottom: 1rem;
      }
    }
  }
`