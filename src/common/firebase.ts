import firebase from 'firebase';
import { config } from './config/firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;

export const auth = firebase.auth();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
