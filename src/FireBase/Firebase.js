// npm install --save firebase
// npm install --save firebase-tools

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxMC1Q-3_ANKD2RdZdAdkuDXdGqioe3b8",
    authDomain: "superadmin-6048a.firebaseapp.com",
    projectId: "superadmin-6048a",
    storageBucket: "superadmin-6048a.appspot.com",
    messagingSenderId: "574094711997",
    appId: "1:574094711997:web:4e88bb47d6b65c1e03abd4",
    measurementId: "G-LK1QEEHMYM"
  };

 const firebaseApp=firebase.initializeApp(firebaseConfig)
 const auth=firebase.auth()
 const provider=new firebase.auth.GoogleAuthProvider() 

 export {auth,provider}