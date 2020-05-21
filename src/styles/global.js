import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }
  
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing:border-box
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: var(--secondaryBackground);
    color: var(--primaryColor);
  }

  body.dark {
  --primaryColor: #fff;
  --secondaryColor: #03a9f4;
  --primaryBackground: #040404;
  --secondaryBackground: #282828;
  --inverseBackground: #fdfdfd;
}
body.light {
  --primaryColor: #222;
  --secondaryColor: #03a9f4;
  --primaryBackground: #fdfdfd;
  --secondaryBackground: #eee;
  --inverseBackground: #0d2538;
}

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
