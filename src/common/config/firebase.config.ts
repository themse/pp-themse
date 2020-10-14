import getConfig from 'next/config';

const {
  publicRuntimeConfig: {
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_API_KEY,
  },
} = getConfig();

export const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
};
