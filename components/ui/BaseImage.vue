<template>
  <img
    class="base-image"
    v-bind="$attrs"
    alt="Image"
    :class="classList"
    :src="useImage(fileName)"
  >
</template>
<script lang="ts" setup>
import {computed} from "@vue/reactivity";
import {PropType} from "@vue/runtime-core";
import useImage from "~/combosables/useImage";

const props = defineProps({
  fileName: String,
  size: String as PropType<'s' | 'm' | 'l' | 'xl'>
})

const classList = computed(() => ([
  'base-image',
  props.size && `base-image_size_${props.size}`
]))
</script>
<style lang="scss" scoped>
.base-image {
  object-fit: cover;
  object-position: center;

  &_size {
    &_xl {
    }

    &_l {
    }

    &_m {
    }

    &_s {
    }
  }
}
</style>
