<template>
  <div
    class="base-dropdown"
    ref="baseDropdownRef"
  >
    <div
      class="base-dropdown__trigger"
      @click="toggleDropdown"
    >
      <slot name="trigger" :isOpen="isOpen" />
    </div>
    <Transition name="slide-fade">
      <div
        :class="contentClassList"
        v-show="isOpen"
      >
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import useDetectOutsideClick from "~/combosables/useDetectClickOutside";
import {PropType, ref} from "@vue/runtime-core";
import {computed} from "@vue/reactivity";

const props = defineProps({
  contentSide: String as PropType<'top' | 'left' | 'right'>,
  default: 'bottom',
})
const isOpen = ref(false)
const baseDropdownRef = ref()

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const contentClassList = computed(() => ([
  'base-dropdown__content',
  props.contentSide && `base-dropdown__content_side_${props.contentSide}`
]))

useDetectOutsideClick(baseDropdownRef, () => {
  isOpen.value = false
})
</script>
<style scoped lang="scss">
.base-dropdown {
  position: relative;
  user-select: none;

  &__content {
    position: absolute;

    &_side {
      &_top {
        bottom: 25px;
      }
      &_left {}
      &_right {}
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
