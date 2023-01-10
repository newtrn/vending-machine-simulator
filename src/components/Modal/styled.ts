import styled from 'styled-components'

export default styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  .back-drop {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    z-index: 1;
    animation: fade-in 0.5s forwards;
  }

  .modal {
    background-color: white;
    position: relative;
    z-index: 2;
    padding: 2rem;
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    max-height: calc(100% - 100px);
  }

  .close-btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media only screen and (max-width: 576px) {
    .modal {
      padding: 2rem 1rem 2rem 1rem;
    }
  }
`

export const ProductModalStyled = styled.div`
  .detail-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .details {
      max-width: 300px;
      font-size: 28px;
      .name {
        margin-bottom: 0.5rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .price, .name {
        font-weight: 700;
      }
      .detail {
        font-size: 16px;
        margin-bottom: 0.5rem;
        display: -webkit-box;
        max-width: 300px;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  .product-img {
    height: 200px;
    margin-right: 2rem;
  }
  .operate-wrapper {
    flex-direction: column;
    .quantity-wrapper {
      margin: 2rem 0 1rem 0;
      .quantity {
        padding: 0 0.5rem;
        font-size: 20px;
      }
    }
  }
  
  @media only screen and (max-width: 992px) {
    .product-img {
      height: 150px;
    }
  }

  @media only screen and (max-width: 576px) {
    .detail-wrapper {
      flex-direction: column;
    }
    .product-img {
      margin: 1rem 0 2rem 0;
    }
    .operate-wrapper {
      .quantity-wrapper {
        margin: 1rem 0 1rem 0;
      }
    }
  }
`