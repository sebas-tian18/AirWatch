//credenciales de firebase para la base de datos en tiempo real
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAtMYdc0nHZmpbZTZMy5fnnTmClA7eMbAc",
    authDomain: "airwatch-v0.firebaseapp.com",
    databaseURL: "https://airwatch-v0-default-rtdb.firebaseio.com",
    projectId: "airwatch-v0",
    storageBucket: "airwatch-v0.appspot.com",
    messagingSenderId: "816424581488",
    appId: "1:816424581488:web:33590198ceabf6cc6e37b5"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };