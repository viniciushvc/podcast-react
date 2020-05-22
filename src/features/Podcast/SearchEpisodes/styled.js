import styled from 'styled-components'

export const SearchWrapper = styled.form`
  margin: 20px 0;

  div {
    font-size: 12px;
    text-align: right;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`

export const Input = styled.input`
  width: 100%;
  display: block;
  padding: 10px;
  border-radius: 5px;
  outline: 0;
  color: var(--primaryColor);
  background-color: var(--primaryBackground);
  border: 1px solid #ddd;
`
