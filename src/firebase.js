import { initializeApp } from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9Td_e7nHAFlnsSmK3Epuaust7zipJnEo",
  authDomain: "react-disney-plus-app-89a0e.firebaseapp.com",
  projectId: "react-disney-plus-app-89a0e",
  storageBucket: "react-disney-plus-app-89a0e.firebasestorage.app",
  messagingSenderId: "685532318756",
  appId: "1:685532318756:web:db88794069f2bddc931cb1"
};

const app = initializeApp(firebaseConfig);

export default app