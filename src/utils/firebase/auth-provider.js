import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { firebaseApp } from "./firebase-config";

const authProvider = new GoogleAuthProvider();

authProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () => signInWithPopup(auth, authProvider);
