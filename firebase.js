const firebaseConfig = {
  apiKey: "PASTE",
  authDomain: "PASTE",
  projectId: "PASTE",
  databaseURL: "PASTE"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const rtdb = firebase.database();
