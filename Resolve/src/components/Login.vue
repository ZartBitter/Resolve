<script setup>
import Modal from "./Modal.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>

<template>
  <button
    id="show-modal"
    @click="showModal = true"
    class="transform rounded-full bg-white p-2 pl-10 pr-9 font-body text-2xl font-extrabold text-indigo-900/90 duration-300 hover:scale-110 hover:text-blue-600"
  >
    ANMELDEN
    <img alt="Vue logo" class="logo mb-1 inline" src="@/assets/iconmonstr-user-1 1.svg" width="20" height="20" />
  </button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false" @wheel.prevent @touchmove.prevent @scroll.prevent>
      <template #header>
        <h3>ANMELDEN</h3>
      </template>
      <template #body> AMK </template>
    </modal>
  </Teleport>
</template>
