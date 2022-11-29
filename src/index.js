import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB07CQ5RddRQB6IRXd__FWcjng6vsyeYWg",
  authDomain: "microproblems-135fc.firebaseapp.com",
  projectId: "microproblems-135fc",
  storageBucket: "microproblems-135fc.appspot.com",
  messagingSenderId: "779798990135",
  appId: "1:779798990135:web:e98be0b243350a719a5eb2",
  measurementId: "G-1X2P69Z02E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
