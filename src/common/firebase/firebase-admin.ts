import * as admin from 'firebase-admin';

import { config } from '@/common/config/firebase-admin.config';

try {
  const { credential, databaseURL } = config;

  admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL,
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
