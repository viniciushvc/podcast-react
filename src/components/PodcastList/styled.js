import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerWrapper = styled.div``

export const Input = styled.input`
  padding: 1rem 0.5rem;
  width: 100%;
  border: 2px solid #333;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 20px;
`

export const ResultTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 20px;
`

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardItem = styled.li`
  list-style: none;
  flex: 0 0 150px;
  margin: 10px;
`

export const CardLink = styled(Link)``

export const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const CardTitle = styled.h1`
  color: #333;
  font-size: 20px;
`
