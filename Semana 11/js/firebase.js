  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBab6fDJo8-NHg96bF6Iwu0oau5uYqkNew",
    authDomain: "agenda-desarrollo-web.firebaseapp.com",
    projectId: "agenda-desarrollo-web",
    storageBucket: "agenda-desarrollo-web.firebasestorage.app",
    messagingSenderId: "450551579467",
    appId: "1:450551579467:web:d384de5cf02a7374d81ece"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //Función para registrar usuarios
  export async function registerUser(email, password){
    try {
        const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Usuario registrado exitosamente', userCredencial.user);
    } catch (error) {
        console.log('Error: ', error.message)
    }
  };