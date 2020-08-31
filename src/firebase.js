import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAz3AnZkaUaGX8hIKcHGZndanaDkFWTTGs',
  authDomain: 'insta-clone-react-14277.firebaseapp.com',
  databaseURL: 'https://insta-clone-react-14277.firebaseio.com',
  projectId: 'insta-clone-react-14277',
  storageBucket: 'insta-clone-react-14277.appspot.com',
  messagingSenderId: '78622822376',
  appId: '1:78622822376:web:57a241ee2fd33033185e5d',
  measurementId: 'G-S3FL9H9QBS',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
