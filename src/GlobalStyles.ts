import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background-color:#ddf;
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
