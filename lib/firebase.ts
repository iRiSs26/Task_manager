// lib/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBoTAke9k-SBFutjniBDO6hgzyLePPFv8E',
  authDomain: 'taskmanager-6f422.firebaseapp.com',
  projectId: 'taskmanager-6f422',
  storageBucket: 'taskmanager-6f422.appspot.com',
  messagingSenderId: '1031620678994',
  appId: '1:1031620678994:web:505c04e1b44ef6b222d68b'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

