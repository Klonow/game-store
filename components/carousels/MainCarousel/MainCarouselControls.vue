<template>
  <div class="main-carousel-controls">
    <BaseLink
      @click="emit('prev')"
      class="main-carousel-controls__arrow-left"
    >
      <IconArrow
        side="left"
        color="white"
      />
    </BaseLink>
    <BaseLink
      @click="emit('next')"
      class="main-carousel-controls__arrow-right"
    >
      <IconArrow
        side="right"
        color="white"
      />
    </BaseLink>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['next', 'prev'])
</script>
<style lang="scss" scoped>
.main-carousel-controls {
  position: absolute;
  min-width: 117rem;
  margin-left: calc((100vw - 1170px) / 2);
  height: 70rem;
  top: 0;

  &__arrow-right,
  &__arrow-left {
    display: flex;
    position: absolute;
    top: calc(50% - 5rem);
    border-radius: 50%;
    padding: 2.3rem 2.1rem;
    background: rgba(196, 196, 196, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    z-index: 2;
  }

  &__arrow-right {
    right: -2.5rem;
  }
  &__arrow-left {
    left: -2.5rem;
  }
}
</style>
