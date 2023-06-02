import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBXvwHB2N0NmARkOcN5wViw_zWETUFK-Dg",
  authDomain: "tarefasplus-6d909.firebaseapp.com",
  projectId: "tarefasplus-6d909",
  storageBucket: "tarefasplus-6d909.appspot.com",
  messagingSenderId: "456187640215",
  appId: "1:456187640215:web:4d46db2991ed7d12952cd2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };