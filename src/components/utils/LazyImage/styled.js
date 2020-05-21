import styled from 'styled-components'

export const ImageWrapper = styled.div`
  background-color: #ddd;
  height: ${(props) => props.height || '100px'};
  width: ${(props) => props.width || '100px'};
  border-radius: ${(props) => props.rounded && '5px'};
`

export const Image = styled.img`
  display: block;
  height: ${(props) => props.height || '100px'};
  width: ${(props) => props.width || '100px'};
  border-radius: ${(props) => props.rounded && '5px'};
`

export const ImageHidden = styled.img``
