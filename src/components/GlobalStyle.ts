import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  @import url('https//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');

  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
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
    background-color: #F7F8FA;
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
