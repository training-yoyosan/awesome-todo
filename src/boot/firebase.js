import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyBdGkaphGRXBArNagJX2Kf5fIAP1oFn1Os',
    authDomain: 'awesome-todo-6021f.firebaseapp.com',
    databaseURL: 'https://awesome-todo-6021f.firebaseio.com',
    projectId: 'awesome-todo-6021f',
    storageBucket: 'awesome-todo-6021f.appspot.com',
    messagingSenderId: '639991953861',
    appId: '1:639991953861:web:6b26e87f710366ff6ef3ac'
  },
  firebaseApp = firebase.initializeApp(firebaseConfig),
  firebaseAuth = firebaseApp.auth(),
  firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
