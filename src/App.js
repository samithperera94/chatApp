import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBTL7UZWPZNuR6AtZI8fyNBSNuqZYTlrw0",
  authDomain: "react-chat-b96ff.firebaseapp.com",
  projectId: "react-chat-b96ff",
  storageBucket: "react-chat-b96ff.appspot.com",
  messagingSenderId: "290290509540",
  appId: "1:290290509540:web:0da07293413ad56dd6aef1"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
