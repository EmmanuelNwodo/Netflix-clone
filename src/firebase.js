
import { initializeApp } from "firebase/app";
import {
   createUserWithEmailAndPassword,
   getAuth, 
   signInWithEmailAndPassword, 
   signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJhJbVO31RNMM-lJ_uFDGRCM5JlYC7zCw",
  authDomain: "netflix-clone-f4cf0.firebaseapp.com",
  projectId: "netflix-clone-f4cf0",
  storageBucket: "netflix-clone-f4cf0.firebasestorage.app",
  messagingSenderId: "482852727505",
  appId: "1:482852727505:web:a507b1ec2e0b2cbd1773f0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
  const res =  await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, "user"), {
      uid:user.uid,
      name,
      authProvider:"local",
      email,
  })
  } catch (error) {
    console.log(error);
    alert(error);
    
  }
}

const login = async (email, password) =>{
  try {
 await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

const logout = async () => {
  signOut(auth);
}

export {auth, login, signup, logout}
