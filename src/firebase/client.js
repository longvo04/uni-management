import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config/firebaseConfig.json" with { type: "json" };

const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth, createUserWithEmailAndPassword, deleteUser };
