import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(database, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
};
