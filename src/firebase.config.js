import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBVbXYQwRuUI2ti7UYV-IX2YdgyK-qfFQs",
  authDomain: "portfolio-8d955.firebaseapp.com",
  projectId: "portfolio-8d955",
  storageBucket: "portfolio-8d955.appspot.com",
  messagingSenderId: "47274532293",
  appId: "1:47274532293:web:304b87d01c33ee8275ffac"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const imgdb = getStorage(app);