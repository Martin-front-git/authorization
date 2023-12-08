import { initializeApp } from "@firebase/app";
//import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import FIREBASE_CONFIG from "../firebase-config";

initializeApp(FIREBASE_CONFIG);

const AuthService = {};

AuthService.user = false;
AuthService.getProfile = (hard = false) => {
    return new Promise(async (res, rej) => {

        const fauth = getAuth();

        await fauth.onAuthStateChanged((user) => {
            if (user) {
                res(user);
            } else {
                res(false);
            }
        });

    });
}

export default AuthService;