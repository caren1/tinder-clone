import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD6VtRz9lBrBcGS3eGOuXu0dyIEDK-_nJQ",
    authDomain: "tinder-clone-wojt.firebaseapp.com",
    databaseURL: "https://tinder-clone-wojt.firebaseio.com",
    projectId: "tinder-clone-wojt",
    storageBucket: "tinder-clone-wojt.appspot.com",
    messagingSenderId: "987110104895",
    appId: "1:987110104895:web:87ae2e531174ed2648fd8a",
    measurementId: "G-VKGH930NSN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;