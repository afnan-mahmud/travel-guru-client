import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyACbpB6GkIsI_a7C0MtwkjinG4z2mH21hg",
    authDomain: "travel-guru-36932.firebaseapp.com",
    projectId: "travel-guru-36932",
    storageBucket: "travel-guru-36932.appspot.com",
    messagingSenderId: "544528798257",
    appId: "1:544528798257:web:72229234aefbf5a8253b10"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth} ;