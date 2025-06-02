
import { initializeApp } from "firebase/app";
import {
   createUserWithEmailAndPassword,
   getAuth, 
   signInWithEmailAndPassword, 
   signOut
  } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";





const firebaseConfig = {
  apiKey: "AIzaSyAhZ1eLtqk3l28OmhDJHMPqqA5v7ANAJu4",
  authDomain: "netflix-clone3-bd4e8.firebaseapp.com",
  projectId: "netflix-clone3-bd4e8",
  storageBucket: "netflix-clone3-bd4e8.firebasestorage.app",
  messagingSenderId: "37955953868",
  appId: "1:37955953868:web:32b17b32d0eded74af8e69"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



const signup = async ( name, email, password) => {
  try {
  const res =  await createUserWithEmailAndPassword(auth, email, password);

  const user = res.user;
  await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
  })
  } catch (error) {
    console.log(error);
    const message = error.code
  .split('/')[1]
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
    toast.error(message);
    
  }
}

const login = async (email, password) =>{
  try {
 await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    const message = error.code
  .split('/')[1]
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
    toast.error(message)
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, login, signup, logout}
