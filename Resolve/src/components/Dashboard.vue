<template>
  <h1>This will be someday the Dashboard Page</h1>
  <!-- Circle's -->
  <div
    class="absolute right-6 -top-7 h-14 w-14 rounded-full bg-gradient-to-br from-white/90 to-white/10 lg:right-12 lg:-top-1/4 lg:h-96 lg:w-96"
  ></div>
  <div
    class="md:right-18 absolute bottom-2/3 right-3 h-28 w-28 rounded-full bg-gradient-to-br from-white/60 to-white/10 md:bottom-1/3 md:h-96 md:w-96"
  ></div>

  <!-- Dashboard-UI -->
  <section class="flex h-screen items-center justify-center">
    <!-- MAIN Glass UI -->
    <div class="z-50 flex h-4/5 w-11/12 rounded-3xl bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-xl lg:w-9/12">
      <!-- User Section Glass UI -->
      <div class="flex basis-1/5 flex-col items-center justify-around rounded-3xl bg-gradient-to-bl from-white/40 to-white/0">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-sky-400" viewBox="0 0 20 20">
            <path
              d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
            />
          </svg>
          <h3>Username</h3>
        </div>
        <p>Member: White Belt</p>
        <button
          class="rounded-full bg-white bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-600 p-1 pl-4 pr-4 font-body font-bold text-indigo-900 duration-200 hover:scale-110 hover:from-cyan-200 hover:via-sky-400 hover:to-blue-500 hover:font-extrabold hover:text-indigo-800"
        >
          <RouterLink to="/Smart" class="flex items-center"
            >SMART
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </RouterLink>
        </button>
      </div>
      <!-- Card Section Glass UI -->
      <div class="basis-4/5">
        <h1 class="font-body text-3xl font-extrabold text-sky-700/80">Multiple Cards each for one SMART goal</h1>
        <div class="mt-6 flex justify-evenly">
          <!-- Glass Card UI -->
          <div class="flex h-1/3 w-1/3 flex-col items-center rounded-3xl bg-gradient-to-tl from-white/60 to-white/20 p-6">
            <h1 class="font-body text-2xl font-bold text-sky-600">Ziel</h1>
            <div class="flex h-1/3 w-4/5 flex-col items-center rounded-3xl bg-gradient-to-tl from-white/80 to-white/60 p-2">
              <!-- Glass Card -->
              <h3>Meilenstein 1</h3>
              <!-- Progressbar -->
              <div></div>
              <!-- Percentage of Progressbar -->
              <h2>60%</h2>
            </div>
          </div>
          <!-- 2nd Glass Card  -->
          <div class="flex h-1/3 w-1/3 flex-col items-center rounded-3xl bg-gradient-to-tl from-white/60 to-white/20 p-6">
            <h1 class="font-body text-2xl font-bold text-sky-600">Ziel</h1>
            <div class="flex h-1/3 w-4/5 flex-col items-center rounded-3xl bg-gradient-to-tl from-white/80 to-white/60 p-2">
              <!-- Glass Card -->
              <h3>Meilenstein 1</h3>
              <!-- Progressbar -->
              <div></div>
              <!-- Percentage of Progressbar -->
              <h2>60%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Circle -->
  <div class="absolute -bottom-16 h-28 w-28 rounded-full bg-gradient-to-br from-white/90 to-white/10 md:left-20 md:h-96 md:w-96"></div>
</template>
