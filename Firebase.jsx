import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5n9yob3HZGX_7_SPWVUGJT1Db81YAV2Q",
  authDomain: "adminpanel-33037.firebaseapp.com",
  projectId: "adminpanel-33037",
  storageBucket: "adminpanel-33037.firebasestorage.app",
  messagingSenderId: "839752507085",
  appId: "1:839752507085:web:f2641c918d18965e331384",
  measurementId: "G-6JNZ4W40VH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);