import styled from 'styled-components'

const Quote = styled.p`
  font-size: 1.5rem;
  opacity: 0.5;

  &::before {
    content: '“';
  }
  &::after {
    content: '”';
  }
`

export default Quote
