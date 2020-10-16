import firebase from 'firebase';
import { config } from '../config/firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;

export type IAuthFirebase = firebase.auth.Auth;
export type IUserFirebase = firebase.User | null;

export const auth: IAuthFirebase = firebase.auth();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const firestore = firebase.firestore();
