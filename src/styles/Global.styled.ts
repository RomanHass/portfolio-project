import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const Globalstyle = createGlobalStyle`
  @font-face {
    font-family: Nunito;
    src: url(./assets/fonts/NunitoSans-Regular.eot?) format("eot"),
      url(./assets/fonts/NunitoSans-Regular.woff?) format("woff"),
      url(./assets/fonts/NunitoSans-Regular.woff2?) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Nunito;
    src: url(./assets/fonts/NunitoSans-SemiBold.eot?) format("eot"),
      url(./assets/fonts/NunitoSans-SemiBold.woff?) format("woff"),
      url(./assets/fonts/NunitoSans-SemiBold.woff2?) format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Nunito;
    src: url(./assets/fonts/NunitoSans-Bold.eot?) format("eot"),
      url(./assets/fonts/NunitoSans-Bold.woff?) format("woff"),
      url(./assets/fonts/NunitoSans-Bold.woff2?) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url(./assets/fonts/PlayfairDisplay-Bold.eot?) format("eot"),
      url(./assets/fonts/PlayfairDisplay-Bold.woff?) format("woff"),
      url(./assets/fonts/PlayfairDisplay-Bold.woff2?) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Roboto;
    src: url(./assets/fonts/Roboto-Medium.eot?) format("eot"),
      url(./assets/fonts/Roboto-Medium.woff?) format("woff"),
      url(./assets/fonts/Roboto-Medium.woff2?) format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Roboto;
    src: url(./assets/fonts/Roboto-Bold.eot?) format("eot"),
      url(./assets/fonts/Roboto-Bold.woff?) format("woff"),
      url(./assets/fonts/Roboto-Bold.woff2?) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Comfortaa;
    src: url(./assets/fonts/Comfortaa-Bold.eot?) format("eot"),
      url(./assets/fonts/Comfortaa-Bold.woff?) format("woff"),
      url(./assets/fonts/Comfortaa-Bold.woff2?) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  body {
    margin: 0;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    line-height: 1.2;
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.font}
  }
`