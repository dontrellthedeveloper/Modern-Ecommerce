import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGvia3tsFrQ7E5-R0cM_s79KKzAKIG3xE",
    authDomain: "x-rebel.firebaseapp.com",
    databaseURL: "https://x-rebel.firebaseio.com",
    projectId: "x-rebel",
    storageBucket: "x-rebel.appspot.com",
    messagingSenderId: "93668975836",
    appId: "1:93668975836:web:fad3ed182fc4ffbb9bc019",
    measurementId: "G-WJYQWQ6LCF"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;   

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;