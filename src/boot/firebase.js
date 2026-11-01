import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBdGkaphGRXBArNagJX2Kf5fIAP1oFn1Os",
  authDomain: "awesome-todo-6021f.firebaseapp.com",
  databaseURL: "https://awesome-todo-6021f.firebaseio.com",
  projectId: "awesome-todo-6021f",
  storageBucket: "awesome-todo-6021f.appspot.com",
  messagingSenderId: "639991953861",
  appId: "1:639991953861:web:6b26e87f710366ff6ef3ac"
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getDatabase(firebaseApp);
