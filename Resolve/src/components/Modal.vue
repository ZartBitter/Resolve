<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="fixed top-0 left-0 z-50 table h-full w-full bg-sky-400/50 transition-opacity duration-300 ease-linear">
      <div class="table-cell align-middle">
        <div class="mx-auto w-1/4 rounded-3xl bg-white px-5 py-9 shadow-md shadow-sky-400/50 transition-all duration-300 ease-out">
          <div class="font-body text-2xl font-extrabold text-indigo-900/90">
            <slot name="header">default header</slot>
          </div>

          <div class="my-5">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="float-right" @click="$emit('close')">OK</button>
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
