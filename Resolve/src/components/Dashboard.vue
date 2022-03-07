<template>
  <h1>This will be someday the Dashboard Page</h1>
  <!-- Circle's -->
  <div class="absolute right-12 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-white/90 to-white/10"></div>
  <div class="absolute right-20 bottom-1/4 h-2/4 w-1/4 rounded-full bg-gradient-to-br from-white/90 to-white/10"></div>

  <!-- Dashboard-UI -->
  <section class="flex h-screen items-center justify-center">
    <div class="z-50 h-4/5 w-9/12 rounded-3xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl">
      <button class="rounded-full bg-white p-1 pl-4 pr-4 font-body font-bold text-sky-600/90 hover:text-blue-800">
        <RouterLink to="/Smart">SMART</RouterLink>
      </button>
    </div>
  </section>

  <!-- Circle -->
  <div class="absolute bottom-0 left-20 h-2/4 w-1/4 rounded-full bg-gradient-to-br from-white/90 to-white/10"></div>
</template>
