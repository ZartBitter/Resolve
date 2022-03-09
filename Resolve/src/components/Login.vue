<script setup>
import Modal from "./Modal.vue";
import { ref } from "vue";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const email = ref("");
const password = ref("");
const errMsg = ref();

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfuyll registered");
      router.push("/dashboard");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>

<template>
  <button
    id="show-modal"
    @click="showModal = true"
    class="transform rounded-full bg-white p-2 pl-10 pr-9 font-body text-2xl font-extrabold text-indigo-900/90 duration-300 hover:scale-110 hover:text-blue-600"
  >
    ANMELDEN
    <img alt="Vue logo" class="logo mb-1 inline" src="@/assets/iconmonstr-user-1 1.svg" width="20" height="20" />
  </button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>ANMELDEN</h3>
      </template>
      <template #body>
        <h1>Sign in to an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="register">Registrieren</button></p>
        <p><button @click="signInWithGoogle">Mit Google Account Registrieren</button></p>
      </template>
    </modal>
  </Teleport>
</template>
