import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCFCAVNnpSs2JSMMlMZbxkzp9MCtlxdcvk',
	authDomain: 'rubel-photography.firebaseapp.com',
	projectId: 'rubel-photography',
	storageBucket: 'rubel-photography.appspot.com',
	messagingSenderId: '126179477940',
	appId: '1:126179477940:web:db2db869a053188efecae1',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
