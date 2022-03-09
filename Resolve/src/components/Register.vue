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
    class="transform rounded-full bg-white p-1 pl-4 pr-4 font-body font-bold text-sky-600/90 duration-300 hover:scale-110 hover:text-blue-800"
  >
    REGISTRIEREN
  </button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3 class="font-body text-2xl font-extrabold text-sky-600/90">REGISTRIEREN</h3>
      </template>
      <template #body>
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Registrieren</button></p>
        <p><button @click="signInWithGoogle">Mit Google Account Registrieren</button></p>
      </template>
    </modal>
  </Teleport>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
