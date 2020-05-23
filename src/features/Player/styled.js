import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  display: ${(props) => (props.hidden ? 'hidden' : 'block')};
  background-color: var(--primaryBackground);
  padding: 30px;
  position: sticky;
  bottom: 0;
`

export const PlayerFlex = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    outline: 0;
    border: none;
    color: currentColor;
    cursor: pointer;
  }

  .actions {
    flex: 0 0 150px;
    display: flex;
    align-items: center;
  }

  .info-wrapper {
    flex: 10 1 auto;
    display: flex;
    align-items: center;

    div {
      width: 100%;

      .title {
        display: block;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }

  .add {
    flex: 0 0 150px;
    margin-left: 60px;
    display: flex;
    align-items: center;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;

    &:focus {
      outline: none;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 5px;
      background-color: #000;
      border-radius: 25px;
    }
    &::-webkit-slider-thumb {
      height: 15px;
      width: 15px;
      border-radius: 7px;
      background-color: #fff;
      margin-top: -5px;
    }
    &::-moz-range-track {
      width: 100%;
      height: 5px;
      background-color: #000;
      border-radius: 25px;
    }
    &::-moz-range-thumb {
      height: 15px;
      width: 15px;
      border-radius: 100%;
      background-color: #fff;
      margin-top: -5px;
    }
  }
`
