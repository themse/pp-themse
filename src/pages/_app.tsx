import { AppProps } from 'next/app';
import '../styles/global.scss';

import { ProvideAuth } from '../common/auth';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}
