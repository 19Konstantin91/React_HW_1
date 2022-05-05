import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { createConversationApi } from "./conversations";
// import { createMessageApi } from "./messages";

const firebaseConfig = {
  apiKey: "AIzaSyBRUXrFFCUSfWBrxaTMSrJFpAn4qTn7-oY",
  authDomain: "gb-chat-50c6d.firebaseapp.com",
  databaseURL:
    "https://gb-chat-50c6d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-chat-50c6d",
  storageBucket: "gb-chat-50c6d.appspot.com",
  messagingSenderId: "505373931202",
  appId: "1:505373931202:web:d875d09b865fb0c6afad5b",
  measurementId: "G-K0CJPMGPS4",
};

export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);

// setTimeout (() => {
//   createConversationApi("room1");
//   createConversationApi("room2");
//   createConversationApi("room3");
// },2000);

// setTimeout(() => {
//   createMessageApi({ id: 1, author: "Bot", message: "Test Bot." }, "room1");
//   createMessageApi(
//     { id: 2, author: "Bot", message: "Test bot room 2." },
//     "room2"
//   );
// }, 2000);
