import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC3NcW3CtQbqila35zysIgTDDA38nM2EEQ",
    authDomain: "squabble-b1880.firebaseapp.com",
    databaseURL: "https://squabble-b1880.firebaseio.com",
    projectId: "squabble-b1880",
    storageBucket: "squabble-b1880.appspot.com",
    messagingSenderId: "179621548652",
    appId: "1:179621548652:web:92c1753d1ae55e03bd7e49",
    measurementId: "G-SFZ5ZV5GMH"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
