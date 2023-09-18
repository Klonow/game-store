<template>
  <transition name="modal">
    <div
      v-if="modal"
      class="base-modal__overlay"
      @click="$services.modal.close()"
    >
      <div
        tabindex="-1"
        role="dialog"
        ref="baseModalRef"
        class="base-modal"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        @click.stop
      >
        <component :is="modal"></component>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import {useModal} from "~/stores/modal";
import {storeToRefs} from "pinia";
import {useNuxtApp} from "#app";

const modalStore = useModal()
const { modal } = storeToRefs(modalStore)
const { $services } = useNuxtApp()

</script>
<style lang="scss">
.base-modal {
  z-index: $z-modal-above;

  &__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: $z-modal-below;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
