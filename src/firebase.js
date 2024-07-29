import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0jpQv6l-stNEgjUN-TSzwlAgh-CFgILI",
  authDomain: "app-7af7e.firebaseapp.com",
  databaseURL: "https://app-7af7e-default-rtdb.firebaseio.com",
  projectId: "app-7af7e",
  storageBucket: "app-7af7e.appspot.com",
  messagingSenderId: "978721169575",
  appId: "1:978721169575:web:ff28341b8d2ec5ff0cfb82",
};

export const app = initializeApp(firebaseConfig);