import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDocFromServer } from "firebase/firestore"; 
import firebaseConfig from "./config/firebaseConfig.json" with { type: "json" };

const app = initializeApp(firebaseConfig);

import { getAuth } from "firebase/auth";
const db = getFirestore(app);
const auth = getAuth(app);

export { collection, doc, setDoc, getDocFromServer, db, app, auth };
