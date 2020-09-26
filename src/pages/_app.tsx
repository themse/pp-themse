import { AppProps } from 'next/app';
import '../styles/global.scss';

import { AuthProvider } from '../common/auth';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
