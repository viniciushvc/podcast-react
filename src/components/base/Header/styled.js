import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  padding: 15px 0;
  background-color: var(--primaryBackground);
`

export const HeaderContent = styled.nav`
  display: flex;
`

export const Spacer = styled.div`
  flex-grow: 1;
`

export const HeaderLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: var(--primaryColor);
  user-select: none;
`
