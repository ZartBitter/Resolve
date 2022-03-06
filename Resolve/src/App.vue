<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!-- Circle in the left corner -->
  <div class="bg-gradient-to-br from-sky-600 to-green-50 h-4/5 w-2/5 rounded-full absolute blur-2xl -z-10 top-0 left-0"></div>
  <!-- Blurred circle in the right corner -->
  <div class="bg-gradient-to-tr from-blue-600 to-green-100 lg:h-4/5 lg:w-2/5 h-64 w-64 rounded-full absolute blur-3xl -z-10 lg:bottom-0 bottom-1/3 right-0"></div>
  <header class="font-serif">
    <img alt="Vue logo" class="logo" src="@/assets/Resolve.svg" width="125" height="125"/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <br>
        <RouterLink to="/Dashboard">Dashboard</RouterLink>
        <br>
        <RouterLink to="/Smart">SMART</RouterLink>
      </nav>
  </header>

  <RouterView/>
</template>

<style>

</style>
