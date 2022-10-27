import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';
import Modal from "react-modal";
import {addDoc, collection, db, auth, doc, onAuthStateChanged, setDoc, Timestamp} from "./lib/firebase";
import FirebaseContext from "./context/firebase";

Modal.setAppElement("#root");

ReactDOM.render(
  <FirebaseContext.Provider value={{ doc, setDoc, addDoc, collection, db, auth, onAuthStateChanged, Timestamp}}>
      <Router>
        <App />
      </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
