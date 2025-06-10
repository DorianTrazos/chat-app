// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD1mAfbpA-JrhRO4YX9xZ0U9vZgltNmARQ',
	authDomain: 'chat-with-login-9eeab.firebaseapp.com',
	projectId: 'chat-with-login-9eeab',
	storageBucket: 'chat-with-login-9eeab.firebasestorage.app',
	messagingSenderId: '7921906465',
	appId: '1:7921906465:web:7cc89c8f3647404646c460'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
