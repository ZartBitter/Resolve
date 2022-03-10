<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <!-- Circle in the left corner -->
  <div class="absolute top-0 left-0 -z-10 h-4/5 w-2/5 rounded-full bg-gradient-to-br from-sky-600 to-green-50 blur-2xl"></div>
  <!-- Blurred circle in the right corner -->
  <div
    class="absolute bottom-1/3 right-0 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-600 to-green-100 blur-3xl lg:bottom-0 lg:h-4/5 lg:w-2/5"
  ></div>
  <!-- Navigation will be removed later on, except of signOut -->
  <header class="font-serif">
    <img alt="Vue logo" class="logo brightness-110" src="@/assets/Resolve.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <br />
      <RouterLink to="/Dashboard">Dashboard</RouterLink>
      <br />
      <RouterLink to="/Smart">SMART</RouterLink>
      <br />
      <button @click="handleSignOut" v-if="isLoggedIn">Ausloggen</button>
    </nav>
  </header>

  <RouterView />
</template>
