import styled from 'styled-components'

export const SpinnerWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin: ${(props) => props.mt || '0'} auto;

  .cube {
    width: 33%;
    height: 33%;
    background-color: var(--primaryColor);
    float: left;
    animation: scaleDelay 1.3s infinite ease-in-out;

    &.cube-0 {
      animation-delay: 0s;
    }
    &.cube-1 {
      animation-delay: 0.1s;
    }
    &.cube-2 {
      animation-delay: 0.2s;
    }
    &.cube-3 {
      animation-delay: 0.3s;
    }
    &.cube-4 {
      animation-delay: 0.4s;
    }
  }

  @keyframes scaleDelay {
    0%,
    70%,
    100% {
      transform: scale3D(1, 1, 1);
    }
    35% {
      transform: scale3D(0, 0, 1);
    }
  }
`
