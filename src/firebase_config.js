import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC0tihzYwZFKjqB_zraZIcg6J8qNIC9ilY",
    authDomain: "mytodoapp-8fdef.firebaseapp.com",
    projectId: "mytodoapp-8fdef",
    storageBucket: "mytodoapp-8fdef.appspot.com",
    messagingSenderId: "411004834469",
    appId: "1:411004834469:web:32cac4e3739c08531ef34c"
  };

  firebase.initializeApp(firebaseConfig);

  const fb = firebase.firestore();

  export{fb};