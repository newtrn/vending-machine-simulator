import styled from 'styled-components'

export default styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  .money-list-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .continue-btn {
    max-width: unset;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 576px) {
    .money-list-wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
`