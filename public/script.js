import { auth } from "../firebase.ts";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, username, password);
    alert(`Hoş geldin ${userCredential.user.email}`);
  } catch (error) {
    alert("Giriş başarısız: " + error.message);
  }
});
