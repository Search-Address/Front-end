import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background:  #121212;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;

  }

  h1, h2, h3, h4, h5, h6, strong, p {
    font-weight: 500;
    font-family: 'Source Sans Pro', sans-serif;

  }

  button {
    cursor: pointer;
  }

  input {
    background: transparent !important;
  }

`;
