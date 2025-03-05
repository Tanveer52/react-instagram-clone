import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyAIRtUFS1772vF1sL6NYFSp9SF1lIB5sGc",
  authDomain: "instagram-clone-react-7489a.firebaseapp.com",
  projectId: "instagram-clone-react-7489a",
  storageBucket: "instagram-clone-react-7489a.firebasestorage.app",
  messagingSenderId: "478884374851",
  appId: "1:478884374851:web:f09fb7e7c11ae0526ce7f6",
  measurementId: "G-87WZ68RVCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {auth, firestore, storage};