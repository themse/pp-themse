export interface IAuth {
  user: IUser | null;
  signInWithGithub: any;
  signOut: any;
}

export interface IUser {
  uid: string;
  email: string;
  name: string;
  photo: string;
}
