import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNJo4MaBMMRW7EgECXovhxoy0o7wA8SLE",
  authDomain: "resolve-a1b10.firebaseapp.com",
  projectId: "resolve-a1b10",
  storageBucket: "resolve-a1b10.appspot.com",
  messagingSenderId: "506042002445",
  appId: "1:506042002445:web:079e6b6a9eb206ba4c7944",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App);

app.use(router);

app.mount("#app");
