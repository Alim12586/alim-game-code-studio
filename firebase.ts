// firebase.ts
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzRVTaQAav7gVVBk8sJ4DvOiOAdPUYa20",
  authDomain: "inlaid-stack-473817-h4.firebaseapp.com",
  projectId: "inlaid-stack-473817-h4",
  storageBucket: "inlaid-stack-473817-h4.firebasestorage.app",
  messagingSenderId: "565359288723",
  appId: "1:565359288723:web:5e84780f39fb9b346fc866"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
