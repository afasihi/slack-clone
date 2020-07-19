import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyBPxzdtJSk2aVO-tAnrBp0-yalUekVGpMw",
  authDomain: "react-slack-clone-80c7a.firebaseapp.com",
  databaseURL: "https://react-slack-clone-80c7a.firebaseio.com",
  projectId: "react-slack-clone-80c7a",
  storageBucket: "react-slack-clone-80c7a.appspot.com",
  messagingSenderId: "577889395450",
  appId: "1:577889395450:web:3d5556950f52c133a2df43"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase