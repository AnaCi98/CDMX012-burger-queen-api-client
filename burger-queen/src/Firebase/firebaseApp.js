import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

//firebase Auth
export const auth = getAuth(app)
export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) =>{
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    
}