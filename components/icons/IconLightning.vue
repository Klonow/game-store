<template>
  <svg :class="classList" xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 17 22" fill="none">
    <path d="M17 8.8H10.0455L11.5909 0L0 13.2H6.95455L5.40909 22L17 8.8Z" fill="url(#paint0_angular_492_658)"/>
    <path d="M17 8.8H10.0455L11.5909 0L0 13.2H6.95455L5.40909 22L17 8.8Z" fill="url(#paint1_radial_492_658)" fill-opacity="0.52"/>
    <path d="M17 8.8H10.0455L11.5909 0L0 13.2H6.95455L5.40909 22L17 8.8Z" fill="url(#paint2_angular_492_658)" style="mix-blend-mode:screen"/>
    <defs>
      <radialGradient id="paint0_angular_492_658" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.245 11) rotate(90) scale(11 8.245)">
        <stop offset="0.15625" stop-color="#D6DFE6"/>
        <stop offset="0.370506" stop-color="#FAFBFC"/>
        <stop offset="0.598958" stop-color="#F6D0FF"/>
        <stop offset="0.865074" stop-color="#D7E0E7"/>
        <stop offset="0.871776" stop-color="#F7F8F9"/>
        <stop offset="0.990443" stop-color="#E8EDF1"/>
      </radialGradient>
      <radialGradient id="paint1_radial_492_658" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.71787 6.21314) rotate(36.4264) scale(16.8579 18.846)">
        <stop offset="0.0760668" stop-color="#6E7CFB"/>
        <stop offset="0.351413" stop-color="#FB42FF"/>
        <stop offset="0.634538" stop-color="#FF42F7"/>
        <stop offset="1" stop-color="#4277FF"/>
      </radialGradient>
      <radialGradient id="paint2_angular_492_658" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 11) rotate(90) scale(11 8.5)">
        <stop offset="0.046875" stop-color="white" stop-opacity="0.72"/>
        <stop offset="0.244792"/>
        <stop offset="0.421875" stop-color="white" stop-opacity="0.72"/>
        <stop offset="0.625"/>
        <stop offset="0.802083" stop-color="white" stop-opacity="0.72"/>
        <stop offset="1"/>
      </radialGradient>
    </defs>
  </svg>
</template>
<script lang="ts" setup>
import {PropType} from "vue";

const props = defineProps({
  align: {
    type: String as PropType<'baseline' | 'middle'>,
    default: 'baseline'
  },
  width: {
    type: Number,
    default: 17,
  },
  height: {
    type: Number,
    default: 23
  }
})

const classList = computed(() => ([`icon-lightning_align_${props.align}`]))
</script>
<style lang="scss" scoped>
.icon-lightning {
  &_align {
    &_baseline {
      vertical-align: baseline;
    }
    &_middle {
      vertical-align: middle;
    }
  }
}
</style>
