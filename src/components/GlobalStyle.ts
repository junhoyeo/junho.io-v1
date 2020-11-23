import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    -webkit-user-drag: none;

    &::selection {
      background-color: rgba(29, 144, 255, 0.25);
      color: rgba(255, 255, 255, 0.75);
    }
  }

  a {
    color: inherit;
    cursor: pointer;
    touch-action: manipulation;
    text-decoration: none;
  }

  body {
    margin: 0;
    word-break: keep-all;
    background-color: #19181D;
  }

  body,
  input {
    -webkit-font-smoothing: antialiased;
  }

  input,
  button {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;
