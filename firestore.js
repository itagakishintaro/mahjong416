import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: 'AIzaSyD5nHJBocA72gyVu7GuZRjwlYBFDBNf468',
  authDomain: 'mahjong416.firebaseapp.com',
  projectId: 'mahjong416',
  storageBucket: 'mahjong416.appspot.com',
  messagingSenderId: '330986708658',
  appId: '1:330986708658:web:f98cd944afe9615db373ab',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db};
//# sourceMappingURL=firestore.js.map
