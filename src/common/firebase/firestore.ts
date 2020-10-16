import { firestore } from './firebase';

export const createUser = (uid: string, dto: any) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set(
      {
        uid,
        ...dto,
      },
      { merge: true }
    );
};
