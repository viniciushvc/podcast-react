import styled from 'styled-components'

export const PodcastWrapper = styled.section`
  margin-top: 20px;
`

export const FlexWrapper = styled.div`
  display: flex;
`

export const ImageWrapper = styled.div`
  max-width: 400px;
`

export const InfoWrapper = styled.div`
  width: 100%;
  padding-left: 30px;

  h1 {
    font-size: 35px;
    font-weight: 800;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  a {
    display: block;
    margin-bottom: 10px;
    color: var(--secondaryColor);
  }

  hr {
    margin-top: 10px;
  }
`
