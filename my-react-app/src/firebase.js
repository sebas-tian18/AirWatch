//credenciales de firebase para la base de datos en tiempo real
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD97EfMFmSS4Nm_4wSIZLmJ2BsksLdljVY",
  authDomain: "airwarch-v0.firebaseapp.com",
  databaseURL: "https://airwarch-v0-default-rtdb.firebaseio.com",
  projectId: "airwarch-v0",
  storageBucket: "airwarch-v0.appspot.com",
  messagingSenderId: "745102217410",
  appId: "1:745102217410:web:9e2a054c4b73b04b382b5b"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
