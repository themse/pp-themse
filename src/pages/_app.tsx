import { AppProps } from 'next/app';
import { ThemeProvider as ThemeChakra, CSSReset } from '@chakra-ui/core';

import { ThemeProvider } from '@material-ui/core/styles';

import { AuthProvider } from '../common/auth';
import '../styles/global.scss';
import theme from '../styles/styles';

import themeChakra from '../styles/styles-chakra';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeChakra theme={themeChakra}>
        <CSSReset />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeChakra>
    </ThemeProvider>
  );
}
