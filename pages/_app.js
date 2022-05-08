import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: darkgray;
    padding: 0;
    box-sizing: border-box;
    
  }

  @font-face {
  font-family: 'Schwifty';
  src: local('Schwifty'), url('/get_schwifty.ttf') format('TrueType');
}

ul {
  padding: 0;
}

li {
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 300;
  list-style-type: none;
}
`;

const theme = {
  colors: {
    primary: '#0070f3',
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
