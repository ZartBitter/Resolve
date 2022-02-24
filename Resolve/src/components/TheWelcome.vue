<script setup>
import HomepageRoad from './icons/HomepageRoad.vue'
import HomepageThoughts from './icons/HomepageThoughts.vue'
import HomepageSuccess from './icons/HomepageSuccess.vue';
import HomepageBuilding from './icons/HomepageBuilding.vue';
import HomepageRoad1 from './icons/HomepageRoad.vue';
</script>

<template>
 
    <!-- Upper Section of the Hompage -->
    <section class=" flex items-center justify-between">
      <HomepageRoad class="max-w-xs"></HomepageRoad>
      <HomepageThoughts class="max-w-xs max-h-56"></HomepageThoughts>
    </section>

    <!-- Login Card -->
    <section>
      <div class="p-10 max-w-md mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 hover:from-purple-800 hover:via-sky-500 hover:to-cyan-400 rounded-xl shadow-xl shadow-blue-300/100 flex flex-col items-center gap-4">
          <img alt="Vue logo" class="logo w-24 h-24" src="@/assets/Resolve.svg"/>
        <button class="rounded-full p-2 pl-10 pr-9 bg-white opacity-90 text-2xl font-body font-extrabold text-indigo-900 hover:text-blue-600">ANMELDEN
          <img alt="Vue logo" class="inline logo mb-1" src="@/assets/iconmonstr-user-1 1.svg" width="20" height="20"/>
         </button>
        <p class="text-neutral-50 font-body font-medium">Noch keinen Account?</p>
        <button class="rounded-full p-1 pl-4 pr-4 bg-white opacity-90 font-body font-bold text-sky-600 hover:text-blue-800">REGISTRIEREN</button>
     </div>
    </section>

    <!-- Lower Section of the Homepage -->
    <section class=" flex items-center justify-between">
      <HomepageBuilding></HomepageBuilding>
      <HomepageSuccess></HomepageSuccess>
    </section>

  


</template>
