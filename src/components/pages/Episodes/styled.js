import styled from 'styled-components'

export const EpisodesWrapper = styled.div``

export const Episode = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  transition: 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &.active {
    color: var(--secondaryColor);
  }

  button {
    background-color: transparent;
    outline: 0;
    border: none;
    color: currentColor;
    cursor: pointer;
  }

  .play {
    flex: 0 0 30px;
    margin-right: 20px;
  }

  .title {
    flex: 8 1 300px;
  }

  .date {
    flex: 1 1 100px;
    font-size: 13px;
  }

  .actions {
    display: flex;
    justify-content: center;
    flex: 0 0 50px;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`
