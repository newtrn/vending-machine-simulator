import styled from 'styled-components'

import { colors } from '@/constants/colors'

export default styled.div`
  .desktop {
    display: flex;
  }

  .mobile {
    display: none;
    .cart-modal-btn {
      width: 35px;
      height: 35px;
      font-size: 16px;
    }
    .cart-total-item-number {
      width: 15px;
      height: 15px;
      font-size: 10px;
      font-weight: 900;
      color: white;
      background-color: ${colors.danger};
      border-radius: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      position: absolute;
      right: 40px;
      top: 35px;
    }
  }

  @media only screen and (max-width: 768px) {
    .mobile {
      right: 65px;
    }
  }

  @media only screen and (max-width: 576px) {
    .mobile {
      right: 40px;
    }
  }
`