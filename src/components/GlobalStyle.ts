import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { systemFontStack } from '../utils/typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    -webkit-user-drag: none;
    font-family: ${systemFontStack};
    color: #F7F7F7;

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

  img {
    margin: 0;
    user-select: none;
    -webkit-user-drag: none;
  }

  body {
    margin: 0;
    word-break: keep-all;
    background-color: #19181D;

    &::-webkit-scrollbar {
      display: none;
    }
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
` as any;
// FIXME: Fix type definitions
