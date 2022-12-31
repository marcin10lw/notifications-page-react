import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 500;
  }

  #root {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
