import styled from 'styled-components'

export const ProgressWrapper = styled.div`
  .bar {
    user-select: none;
    width: 100%;
    display: flex;
    align-items: center;

    .bar__time {
      color: white;
      font-size: 16px;
    }

    .bar__progress {
      flex: 1;
      border-radius: 5px;
      margin: 0 20px;
      height: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 100%;

      .bar__progress__knob {
        position: relative;
        height: 16px;
        width: 16px;
        border: 1.5px solid white;
        border-radius: 50%;
        background-color: orange;
      }
    }
  }
`
