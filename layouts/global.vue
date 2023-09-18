<template>
  <slot />
  <BaseButton @click="openModal">
    Open Modal
  </BaseButton>
  <BaseModal />
</template>
<script lang="ts" setup>
import BaseModal from "~/components/ui/BaseModal.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import ProductInfoModal from "~/components/modals/ProductInfoModal.vue"
import {useNuxtApp} from "#app";

const { $services } = useNuxtApp();

const openModal = () => {
  $services.modal.open(ProductInfoModal)
}
</script>
