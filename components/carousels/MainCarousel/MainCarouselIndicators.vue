<template>
  <ol class="main-carousel-indicators">
    <li
      v-for="(_, index) in props.items"
      class="main-carousel-indicators__indicator"
      :class="{ 'main-carousel-indicators__indicator_active': index === props.activeImage }"
    ></li>
  </ol>
</template>
<script lang="ts" setup>
const props = defineProps({
  items: {
    type: Array,
    default: []
  },
  activeImage: Number,
})

</script>
<style lang="scss" scoped>
.main-carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }

  &__indicator {
    border-radius: .8rem;
    height: .2rem;
    width: 4rem;
    background: rgba(255, 255, 255, 0.1);
    transition: background-color .5s ease-in-out;

    &_active {
      background: $color-white;
    }
  }
}
</style>
