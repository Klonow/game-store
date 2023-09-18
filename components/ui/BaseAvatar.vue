<template>
  <img
    alt="Avatar"
    :src="imageSrc"
    :class="classList"
  >
</template>
<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {computed} from "@vue/reactivity";

const props = defineProps({
  size: String as PropType<'s'>,
  form: String as PropType<'square' | 'round'>,
  imageSrc: String
})

const classList = computed(() => ([
  'base-avatar',
  `base-avatar_form_${props.form}`,
  `base-avatar_size_${props.size}`
]))
</script>
<style lang="scss" scoped>
.base-avatar {
  object-fit: cover;
  object-position: center;
  border: .2rem $color-green solid;

  &_form {
    &_round {
      border-radius: 50%;
    }

    &_square {
      border-radius: .5rem;
    }
  }

  &_size {
    &_xl {
    }

    &_l {
    }

    &_m {
    }

    &_s {
      width: 3.4rem;
      height: 3.4rem;
    }
  }
}
</style>
