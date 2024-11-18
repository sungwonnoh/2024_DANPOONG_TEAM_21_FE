import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
    user-select: none;
    -webkit-touch-callout: none;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table, figure {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline; 
    font-family: 'Pretendard';
  }

  body, html {
    height: 100dvh; 
    min-height: 100vh; 
    //max-width: 430px;
    width : 360px;
    margin: 0 auto;
    overflow-x: hidden; 
    background-color: #fff; 
  }

  input, ::placeholder, textarea {
    font-family: 'Pretendard';
  }
`;

export default GlobalStyles;
