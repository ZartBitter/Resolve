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
      console.log("Successfully loggedin");
      alert("Erfolgreich angemeldet");
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
    class="flex transform items-center justify-center rounded-full bg-white p-2 pl-10 pr-9 font-body text-2xl font-extrabold text-indigo-900/90 duration-300 hover:scale-110 hover:text-blue-600"
  >
    ANMELDEN
    <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h1 class="text-indigo-900/90">ANMELDEN</h1>
      </template>
      <template #body>
        <h3 class="font-body text-lg font-bold text-indigo-800/90">Login</h3>
        <p>
          <label for="email" class="mt-2 mb-1 block text-sm font-medium text-gray-700">Email Adresse</label>
          <input
            required
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            v-model="email"
            class="w-full rounded-lg border-2 border-sky-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </p>
        <p>
          <label for="password" class="mt-1 mb-1 block text-sm font-medium text-gray-700">Passwort</label>
          <input
            id="password"
            required
            name="password"
            type="password"
            placeholder="Passwort"
            v-model="password"
            class="w-full rounded-lg border-2 border-sky-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </p>

        <!-- Error message, in case of incorrect entries -->
        <p v-if="errMsg" class="mt-2 font-body font-bold text-red-700">{{ errMsg }}</p>

        <div class="flex justify-center">
          <p>
            <button
              @click="register"
              class="mt-3 transform rounded-full bg-gradient-to-br from-indigo-800 to-sky-500 p-2 px-4 font-body font-bold text-slate-100 duration-300 hover:scale-110 hover:from-blue-700 hover:via-blue-500 hover:to-cyan-500 hover:text-white"
            >
              Anmelden
            </button>
          </p>
        </div>
      </template>
    </modal>
  </Teleport>
</template>
