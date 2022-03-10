<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <!-- Card Style of the modal pop up -->
    <div
      v-if="show"
      class="fixed top-0 left-0 z-50 table h-full w-full bg-gradient-to-br from-white/70 to-white/10 backdrop-blur-xl transition-opacity duration-300 ease-linear"
    >
      <div class="table-cell align-middle">
        <div class="mx-auto w-1/3 rounded-3xl bg-white px-5 py-9 shadow-md shadow-sky-400/50 transition-all duration-300 ease-out">
          <div class="font-body text-2xl font-extrabold">
            <slot name="header">default header</slot>
          </div>

          <div class="my-5">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="float-right" @click="$emit('close')">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 fill-red-500 duration-300 hover:scale-125 hover:fill-red-700"
                  viewBox="0 0 20 20"
                  fill="blue-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
