import styled from 'styled-components'

export const PodcastWrapper = styled.section`
  margin-top: 20px;
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`

export const ImageWrapper = styled.div`
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`

export const InfoWrapper = styled.div`
  width: 100%;
  padding-left: 30px;

  h1 {
    font-size: 72px;
    font-weight: 900;
  }

  h2 {
    font-size: 20px;
  }
`
