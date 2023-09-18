<template>
  <svg
    :class="classList"
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="5"
    viewBox="0 0 8 5"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 2.59454L1.2543 5L0 3.50432L4 0L8 3.50432L6.7457 5L4 2.59454Z"
    />
  </svg>
</template>
<script lang="ts" setup>
import {computed} from "@vue/reactivity";
import {Prop, PropType} from "@vue/runtime-core";

const props = defineProps({
  side: {
    type: String as PropType<'left' | 'right' | 'top' | 'bottom'>,
    default: 'left'
  },
  color: {
    type: String as Prop<'green' | 'white'>,
    default: 'green'
  }
})

const classList = computed(() => ([
  'icon-arrow',
  `icon-arrow_side_${props.side}`,
  `icon-arrow_color_${props.color}`
]))

</script>
<style lang="scss" scoped>
.icon-arrow {

  &_color {
    &_green {
      fill: $color-green;
    }
    &_white {
      fill: $color-white;
    }
  }

  &_side {
    &_left {
      transform: rotate(270deg);
    }
    &_bottom {
      transform: rotate(180deg);
    }
    &_right {
      transform: rotate(90deg);
    }
    &_top {
      transform: rotate(0deg);
    }
  }
}
</style>
