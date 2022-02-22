<script setup>
import HomepageRoad from './icons/HomepageRoad.vue'
import HomepageThoughts from './icons/HomepageThoughts.vue'
import HomepageSuccess from './icons/HomepageSuccess.vue';
import HomepageBuilding from './icons/HomepageBuilding.vue';
</script>

<template>
 
    <!-- Upper Section of the Hompage -->
    <section class="inline">
      <HomepageRoad></HomepageRoad>
      <HomepageThoughts></HomepageThoughts>
    </section>

    <!-- Login Card -->
    <section>
      <div class="p-6 max-w-sm mx-auto bg-gradient-to-r from-green-100 via-cyan-400 to-blue-600 hover:from- hover:to-purple-800 rounded-xl shadow-lg flex items-center space-x-4">
        <img alt="Vue logo" class="logo" src="@/assets/Resolve.svg" width="100" height="100"/>
      <div>
       <button class="text-2xl font-medium text-indigo-800">Anmelden</button>
       <p class="text-neutral-50">Noch keinen Account?</p>
       <button class="text-sky-600">Registrieren</button>
      </div>
     </div>
    </section>

    <!-- Lower Section of the Homepage -->
    <section>
      <HomepageBuilding></HomepageBuilding>
      <HomepageSuccess></HomepageSuccess>
    </section>

  


</template>
