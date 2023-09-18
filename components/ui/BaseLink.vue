<template>
  <NuxtLink v-bind="$attrs" :class="classList">
    <slot />
  </NuxtLink>
</template>
<script lang="ts" setup>
import {computed} from "@vue/reactivity";
import {PropType} from "vue";

const props = defineProps({
  view: String as PropType<'primary' | 'regular'>
})

const classList = computed(() => ([
  'base-link',
  props.view && `base-link_view_${props.view}`
]))

</script>
<style lang="scss" scoped>
.base-link {

  &_view {
    &_primary {
      font-family: 'Inter', 'sans-serif';
      @include f-size(ml, 400);
      color: $color-blue;
    }

    &_regular {
      transition: opacity .15s linear;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
