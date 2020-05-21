import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  text-align: center;
  margin: 30px 0;

  strong {
    font-size: 20px;
    color: #dc3545;
  }
`

export const Link = styled.a`
  color: var(--inverseColor);
  font-weight: bold;
  transition: 0.1s;

  &:hover {
    color: var(--secondaryColor);
  }
`
