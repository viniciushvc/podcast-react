import { css } from 'styled-components'

export const animations = css`
  @keyframes earth {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
      transition: transform 20s;
    }
  }
  @keyframes move-astronaut {
    100% {
      -webkit-transform: translate(-160px, -160px);
      transform: translate(-160px, -160px);
    }
  }
  @keyframes rotate-astronaut {
    100% {
      -webkit-transform: rotate(-720deg);
      transform: rotate(-720deg);
    }
  }
`
