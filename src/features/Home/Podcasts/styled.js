import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerWrapper = styled.div`
  margin: 20px 0;
  border-radius: 5px;
`

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const CardItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  border-radius: 5px;
`

export const CardLink = styled(Link)``

export const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const CardTitle = styled.p`
  margin-top: 5px;
  color: var(--primaryColor);
`
