import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDr4qkU9RaO-Y5rXIuXlTQnqt7dyD9ZzaY",
  authDomain: "e-ride-833b2.firebaseapp.com",
  projectId: "e-ride-833b2",
  storageBucket: "e-ride-833b2.appspot.com",
  messagingSenderId: "634314550244",
  appId: "1:634314550244:web:a7f38f5ed747eb94faf5f1"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();