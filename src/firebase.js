import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCfU-b6Af7t9eSGJwRkWWbOGjWsn9Jbfs8",
    authDomain: "challenge-a87d3.firebaseapp.com",
    projectId: "challenge-a87d3",
    storageBucket: "challenge-a87d3.appspot.com",
    messagingSenderId: "360613597210",
    appId: "1:360613597210:web:83894694280ad01a5c41a3"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  export function logout (){
    return signOut(auth);
  }

  export function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
     const unsub = onAuthStateChanged( auth, user => setCurrentUser(user))
      return unsub;
    }, []);

    return currentUser;
  }
export {db};