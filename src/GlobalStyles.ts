import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

  * {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {

      @font-face {
      font-family: 'Comfortaa';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/comfortaa/v40/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4VrMDrMfIA.woff2) format('woff2');
      }

      margin: 0;
      font-family: confortaa, sans-serif;
      background-color:#ddf;
      color: #1e2753;
      display: flex;
      justify-content: center;
      width: 100vw;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    button {
      font-family: inherit;
    }

    h1,
    h2 {
      margin: 0;
    }

    a,
  a:visited,
  a:active {
    text-decoration: none;
  }

`;

export default GlobalStyles;
