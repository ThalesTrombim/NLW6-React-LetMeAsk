import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_URL,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyBbsvJuiT4vgNnP8-iWH3RvSW4pGwt4EGQ",
    authDomain: "letmeask-nlw6-f8aae.firebaseapp.com",
    databaseURL: "https://letmeask-nlw6-f8aae-default-rtdb.firebaseio.com",
    projectId: "letmeask-nlw6-f8aae",
    storageBucket: "letmeask-nlw6-f8aae.appspot.com",
    messagingSenderId: "123571159736",
    appId: "1:123571159736:web:481e8bd0708e7f537e6a4d"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase }