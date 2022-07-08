import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.secondaryShade};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 16px;
    box-sizing: border-box;
  }

  * {
      box-sizing: border-box;
  }
`;

export default GlobalStyle;
