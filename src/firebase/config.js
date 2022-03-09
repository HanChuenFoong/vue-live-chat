import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDbxSp-FRh1-aNwOIPpoTcLTCWwOvwRYOY",
    authDomain: "udemy-vue-site-4333c.firebaseapp.com",
    projectId: "udemy-vue-site-4333c",
    storageBucket: "udemy-vue-site-4333c.appspot.com",
    messagingSenderId: "632479525748",
    appId: "1:632479525748:web:e810bd6d2198688a0b1a21"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  export { projectAuth, projectFirestore, timestamp }