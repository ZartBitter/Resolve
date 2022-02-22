<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/Resolve.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <br>
        <RouterLink to="/Dashboard">Dashboard</RouterLink>
      </nav>
  </header>

  <RouterView/>
</template>

<style>

</style>
