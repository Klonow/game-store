<template>
  <div class="cart">
    <IconCart />
    <span class="cart__count-products">{{ countProducts }}</span>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps({
  countProducts: {
    type: Number,
    default: 0
  }
})
</script>
<style lang="scss" scoped>
.cart {
  position: relative;
  width: 4rem;
  height: 2.5rem;
  cursor: pointer;

  &__count-products {
    position: absolute;
    top: -1.6rem;
    right: -0.4rem;
    background: rgba(21, 15, 38, 0.35);
    backdrop-filter: blur(5px);
    border-radius: .6rem;
    padding: .4rem 1rem;
    @include f-size(m, 700);
    color: $color-green;
  }
}
</style>
