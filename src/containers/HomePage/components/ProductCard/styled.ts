import styled from 'styled-components'

export default styled.div`
  cursor: pointer;
  flex-basis: 120px;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 1rem 0.5rem;
  margin: 0 0.5rem;
  border-radius: 8px;
  transition: 0.2s all ease-out;
  &:hover {
    .product-img {
      transform: scale(1.1);
    }
  }
  .product-img {
    transition: 0.2s all ease-out;
    height: 100px;
  }
  &.disabled {
    .product-img {
      opacity: 0.5;
    }
    cursor: not-allowed;
  }
`