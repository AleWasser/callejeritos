import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCYOImX8GSJipN2rzapF4tu-92tVmvbzdc",
    authDomain: "callejeritos-b36c7.firebaseapp.com",
    databaseURL: "https://callejeritos-b36c7.firebaseio.com",
    projectId: "callejeritos-b36c7",
    storageBucket: "",
    messagingSenderId: "1013743313818",
    appId: "1:1013743313818:web:bb188764e6bccb8e"
  })
}

const db = firebase.database();
//const storage = firebase.storage();

export {

  db
}
