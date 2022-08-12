import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCKJiwjLDfE8Ce6S754OpTd5YkQHQyuJyM",
  authDomain: "tesla-clone-a2909.firebaseapp.com",
  projectId: "tesla-clone-a2909",
  storageBucket: "tesla-clone-a2909.appspot.com",
  messagingSenderId: "334429406012",
  appId: "1:334429406012:web:9b26b4d1268ea874cd1439",
  measurementId: "G-GNKW9PWV9J"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
