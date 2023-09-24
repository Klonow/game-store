<template>
  <div class="promo-product-card">
    <div class="promo-product-card__wrapper">
      <div class="promo-product-card__content">
        <h4 class="promo-product-card__title">
         {{ title }}
        </h4>
        <div class="promo-product-card__info">
          <span class="promo-product-card__price">{{ price }}</span>
          <span class="promo-product-card__discount">{{ discount }}</span>
          <span class="promo-product-card__old-price">{{ oldPrice  }}</span>
        </div>
      </div>
      <slot name="image" />
      <div class="promo-product-card__buttons">
        <BaseButton
          view="clearly-white"
          font-size="m"
          indent="l"
          border-radius="m"
        >Купить</BaseButton>
        <BaseButton
          view="clearly-white"
          font-size="m"
          indent="l"
          border-radius="m"
        >В избранное</BaseButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";

export type PromoProductCard = {
  title: string
  discount: string
  oldPrice: string
  price: string
}

const props = defineProps<PromoProductCard>()

</script>
<style lang="scss" scoped>
.promo-product-card {
  width: 62rem;
  height: 36rem;
  border-radius: 1.5rem;
  padding: 4rem;
  position: relative;

  &__content {
    z-index: 1;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 38rem;
  }

  &__title {
    color: $color-white;
    @include f-size(h4, 800);
    margin-bottom: 2rem;
  }

  &__info > *:not(:last-child) {
    margin-right: 2rem;
  }

  &__price {
    @include f-size(xxl, 800);
    color: $color-white;
  }

  &__discount {
    @include f-size(al, 800);
    color: $color-yellow;
  }

  &__old-price {
    @include f-size(al, 600);
    color: $color-grey-8;
  }

  &__buttons {
    display: flex;
  }
}
</style>
