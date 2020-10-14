import getConfig from 'next/config';
import { ServiceAccount } from 'firebase-admin';

const {
  publicRuntimeConfig: {
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY,
    FIREBASE_PROJECT_ID,
    FIREBASE_DATABASE_URL,
  },
} = getConfig();

type AdminConfig = {
  credential: ServiceAccount;
  databaseURL: string;
};

export const config: AdminConfig = {
  credential: {
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY,
    projectId: FIREBASE_PROJECT_ID,
  },
  databaseURL: FIREBASE_DATABASE_URL,
};
