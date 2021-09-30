import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWDXXmfG2WxRMLBTcCcc5G7dM8E7wxmF4",
  authDomain: "fir-auth-58d47.firebaseapp.com",
  projectId: "fir-auth-58d47",
  storageBucket: "fir-auth-58d47.appspot.com",
  messagingSenderId: "582035892169",
  appId: "1:582035892169:web:5c1d8561b67cfc6f39ea18",
  measurementId: "G-DPZBG1VD5N",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
