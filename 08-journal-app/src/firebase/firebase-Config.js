import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyDEZzB9ZfE_v8NsqTF2J5_P866_Su8ORak",
//   authDomain: "react-app-curso-d4a51.firebaseapp.com",
//   databaseURL: "https://react-app-curso-d4a51.firebaseio.com",
//   projectId: "react-app-curso-d4a51",
//   storageBucket: "react-app-curso-d4a51.appspot.com",
//   messagingSenderId: "1008612748363",
//   appId: "1:1008612748363:web:17e2a08b8f3dfb9d9bf1ce"
// };


// if(process.env.NODE_ENV==='test'){
//   //testing
//   firebase.initializeApp(firebaseConfigTesting);

// }else{
//   firebase.initializeApp(firebaseConfig);
// }
firebase.initializeApp(firebaseConfig);

 

  //Base de datos
const db=firebase.firestore();

const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}