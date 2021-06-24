import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyD7CUj8QXpWh7CLz8Zq22k22sqfVf5OAAs",
//     authDomain: "linkedin-clone-e187e.firebaseapp.com",
//     projectId: "linkedin-clone-e187e",
//     storageBucket: "linkedin-clone-e187e.appspot.com",
//     messagingSenderId: "153894880330",
//     appId: "1:153894880330:web:26e4e79db51d5992f892b3"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   const storage = firebase.storage();

//   export {auth,provider,storage};
//   export default db;


  var firebaseConfig = {
    apiKey: "AIzaSyCq6Gm-viZHUXaN9ulLezdlzYELydY2xRU",
    authDomain: "linkedin-clone-2-d823f.firebaseapp.com",
    projectId: "linkedin-clone-2-d823f",
    storageBucket: "linkedin-clone-2-d823f.appspot.com",
    messagingSenderId: "65396002485",
    appId: "1:65396002485:web:5861cad55ea188337a38fc",
    measurementId: "G-PLGHWCLTKJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export {auth,provider,storage};
  export default db;
