import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBRUXrFFCUSfWBrxaTMSrJFpAn4qTn7-oY",
  authDomain: "gb-chat-50c6d.firebaseapp.com",
  databaseURL: "https://gb-chat-50c6d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-chat-50c6d",
  storageBucket: "gb-chat-50c6d.appspot.com",
  messagingSenderId: "505373931202",
  appId: "1:505373931202:web:d875d09b865fb0c6afad5b",
  measurementId: "G-K0CJPMGPS4"
};

export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);