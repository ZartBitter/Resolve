<script setup>
import HomepageRoad from "./icons/HomepageRoad.vue";
import HomepageThoughts from "./icons/HomepageThoughts.vue";
import HomepageSuccess from "./icons/HomepageSuccess.vue";
import HomepageBuilding from "./icons/HomepageBuilding.vue";
import HomepageRoad1 from "./icons/HomepageRoad.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
</script>

<template>
  <!-- Upper Section of the Hompage -->
  <section class="mb-4 flex flex-col items-center md:flex-row md:justify-between lg:mb-0">
    <div class="flex h-44 w-44 items-center rounded-full bg-gradient-to-br from-white/70 to-white/10 lg:h-96 lg:w-96">
      <HomepageRoad class="ml-8 max-w-xs"></HomepageRoad>
    </div>

    <div class="mt-4 flex h-44 w-44 items-center rounded-full bg-gradient-to-br from-white/70 to-white/10 lg:mt-0 lg:h-96 lg:w-96">
      <HomepageThoughts class="z-10 max-h-56 max-w-xs"></HomepageThoughts>
    </div>
  </section>

  <!-- Login Card -->
  <section>
    <div
      class="mx-auto flex max-w-xs flex-col items-center gap-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 p-10 shadow-xl shadow-blue-300/100 hover:from-purple-800 hover:via-sky-500 hover:to-cyan-400 lg:max-w-md"
    >
      <img alt="Vue logo" class="logo h-24 w-24 brightness-110" src="@/assets/Resolve.svg" />
      <Login></Login>
      <p class="font-body font-medium text-neutral-50">Noch keinen Account?</p>
      <Register></Register>
    </div>
  </section>

  <!-- Lower Section of the Homepage -->
  <section class="mt-4 mb-4 flex flex-col items-center md:flex-row md:justify-between lg:mt-0">
    <div class="flex h-44 w-44 items-center rounded-full bg-gradient-to-br from-white/70 to-white/10 lg:h-96 lg:w-96">
      <HomepageBuilding class="z-10 ml-5 max-h-56 max-w-xs lg:ml-10"></HomepageBuilding>
    </div>

    <div class="mt-4 mb-4 flex h-44 w-44 items-center rounded-full bg-gradient-to-br from-white/70 to-white/10 lg:mt-0 lg:h-96 lg:w-96">
      <HomepageSuccess class="z-10 ml-2 max-h-20 max-w-lg lg:ml-8 lg:max-h-80"></HomepageSuccess>
    </div>
  </section>
</template>
