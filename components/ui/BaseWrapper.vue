<template>
  <div :class="classList">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import {computed} from "@vue/reactivity";
import {PropType} from "@vue/runtime-core";

const props = defineProps({
  view: {
    type: String as PropType<'mobile'>,
    validator(value: string) {
      return value.includes("mobile")
    }
  },
})
const classList = computed(() => [
  'base-wrapper',
  props.view && `base-wrapper__view_${props.view}`
])

</script>
<style lang="scss">
.base-wrapper {
  max-width: 117rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  &__view {
    &_mobile {
      padding-left: 2.1rem;
      padding-right: 2.1rem;
    }
  }
}
</style>
