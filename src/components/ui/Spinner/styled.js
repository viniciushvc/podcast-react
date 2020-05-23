import styled from 'styled-components'

export const SpinnerWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: ${(props) => props.mt || '0'} auto;

  .spin-1,
  .spin-2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #999;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: bounce 1.5s infinite ease-in-out;
  }

  .spin-2 {
    animation-delay: -1s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`
