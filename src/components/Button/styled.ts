import styled from 'styled-components'

import { colors } from '@/constants/colors'

export default styled.div`
  padding: 0.5rem 2rem;
  background-color: ${colors.primaryOrange};
  border-radius: 8px;
  color: white;
  font-weight: 700;
  border: 1px solid ${colors.primaryOrange};
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: transparent;
    color: ${colors.primaryOrange};
  }

  &.text-icon {
    border-radius: 100%;
    width: 25px;
    height: 25px;
    padding: 0;
    font-size: 10px;
    span {
      margin-top: 1px;
    }
  }

  &.outline {
    background-color: transparent;
    color: ${colors.primaryOrange};
    &:hover {
      background-color: ${colors.primaryOrange};
      color: white;
    }
    &.disabled {
      background-color: transparent;
      color: ${colors.disabledOrange};
      &:hover {
        background-color: transparent;
        color: ${colors.disabledOrange};
      }
    }
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${colors.disabledOrange};
    border: 1px solid ${colors.disabledOrange};
    &:hover {
      background-color: ${colors.disabledOrange};
      border: 1px solid ${colors.disabledOrange};
      color: white;
    }
  }

  &.danger {
    background-color: ${colors.danger};
    &:hover {
      background-color: transparent;
      color: ${colors.danger};
    }
  }
`