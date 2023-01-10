import styled from 'styled-components'

export default styled.div`
  width: 40%;
  padding: 1rem;
  margin: 0 0.5rem;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .cart-items-section {
    max-height: 500px;
    overflow-y: auto;
    .cart-item {
      display: grid;
      grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
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
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
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
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
    margin: 0;
    padding: 0;
    .cart-items-section {
      max-height: 350px;
      .cart-item {
        grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
      }
    }
  }
`