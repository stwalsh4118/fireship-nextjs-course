// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBybT2YtlPnv0in-pKT6QZ5wx89vPElJbU",
	authDomain: "fir-nexjs-course.firebaseapp.com",
	projectId: "fir-nexjs-course",
	storageBucket: "fir-nexjs-course.appspot.com",
	messagingSenderId: "882040294677",
	appId: "1:882040294677:web:e80913a4e0ba58f253ad1c",
	measurementId: "G-S95VG6NHVN",
};

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
