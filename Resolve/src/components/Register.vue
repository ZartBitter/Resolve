<script setup>
import Modal from "./Modal.vue";
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const email = ref("");
const password = ref("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfuyll registered");
      alert("Erfolgreich registriert");
      router.push("/dashboard");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      alert("Erfolgreich registriert");
      router.push("/dashboard");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<template>
  <button
    id="show-modal"
    @click="showModal = true"
    class="flex transform items-center justify-center rounded-full bg-white p-1 pl-4 pr-4 font-body font-bold text-sky-600/90 duration-300 hover:scale-110 hover:text-blue-800"
  >
    REGISTRIEREN
    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
      />
    </svg>
  </button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h1 class="font-body text-2xl font-extrabold text-sky-600/90">REGISTRIEREN</h1>
      </template>
      <template #body>
        <h3 class="text-lg font-medium text-sky-500/90">Account erstellen</h3>
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
        <div class="mt-3 flex items-center">
          <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" required class="h-4 w-4 border-gray-300 focus:ring-purple-600" />
          <label for="terms-and-privacy" class="ml-2 text-sm text-gray-900">
            I agree to the
            <a href="#" class="duration-400 font-medium text-indigo-400 hover:font-bold hover:text-indigo-500">Terms</a>
            and
            <a href="#" class="duration-400 font-medium text-indigo-400 hover:font-bold hover:text-indigo-500">Privacy Policy</a>
          </label>
        </div>
        <div class="mt-4 mb-2 flex justify-center">
          <p>
            <button
              @click="signInWithGoogle"
              class="mt-1 transform rounded-full bg-gradient-to-br from-sky-600 to-green-100 p-2 px-4 font-body font-bold text-slate-100 duration-300 hover:scale-110 hover:from-sky-800 hover:via-sky-600 hover:to-cyan-400 hover:text-white"
            >
              Mit Google Account Registrieren
            </button>
          </p>
        </div>
        <div class="flex justify-center">
          <p>
            <button
              @click="register"
              class="mt-1 transform rounded-full bg-gradient-to-tr from-sky-600 to-green-100 p-2 px-4 font-body font-bold text-slate-100 duration-300 hover:scale-110 hover:from-sky-800 hover:via-sky-600 hover:to-cyan-400 hover:text-white"
            >
              Registrieren
            </button>
          </p>
        </div>
      </template>
    </modal>
  </Teleport>
</template>

<style></style>
