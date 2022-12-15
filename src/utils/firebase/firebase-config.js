import { initializeApp } from "firebase/app";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: `${apiKey}`,
  authDomain: "bushido-clothing-db.firebaseapp.com",
  projectId: "bushido-clothing-db",
  storageBucket: "bushido-clothing-db.appspot.com",
  messagingSenderId: "413012507544",
  appId: "1:413012507544:web:c0636d16c30ddef92949ed",
};

export const firebaseApp = initializeApp(firebaseConfig);
