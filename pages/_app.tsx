import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { AuthProvider } from '@/common/auth';
import '@/client/styles/global.scss';
import theme from '@/client/styles/styles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
