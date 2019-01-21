import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire);

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
});

export const db = firebaseApp.firestore();

const settings = { };
db.settings(settings);
