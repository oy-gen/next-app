import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  @font-face {
  font-family: 'Schwifty';
  src: local('Schwifty'), url('/get_schwifty.ttf') format('TrueType');
}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
