<template>
  <div class="popular-product-card">
    <div class="popular-product-card__img">
      <BaseImage :fileName="product.imageSrc" />
      <div class="popular-product-card__above-img">
        <div class="popular-product-card__above-img-header">
          <div class="popular-product-card__badge">Top 4</div>
        </div>
        <div class="popular-product-card__above-img-content"></div>
        <div class="popular-product-card__above-img-footer">
          <BaseButton
            view="primary"
            font-size="m"
            full-width
            indent="l"
            border-radius="m"
          >В корзину</BaseButton>
        </div>
      </div>
    </div>
    <div class="popular-product-card__content">
      <div class="popular-product-card__content-header">
        <span class="popular-product-card__price">{{ product.price }}</span>
        <span class="popular-product-card__discount">{{ product.discount }}</span>
        <span class="popular-product-card__old-price">{{ product.oldPrice }}</span>
      </div>
      <div class="popular-product-card__content-bottom">
        <p class="popular-product-card__title">{{ product.title }}</p>
        <BaseTags :tags="product.tags" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseImage from "~/components/ui/BaseImage.vue";
import { PopularProduct } from "~/models/Product";
import BaseButton from "~/components/ui/BaseButton.vue";

const props = defineProps<{product: PopularProduct}>()
</script>
<style lang="scss" scoped>
.popular-product-card {
  max-width: 30rem;

  &__badge {
  }

  &__img {
    position: relative;
  }

  &__above-img {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 2rem;
    position: absolute;
    top: 0;

    &-content {
      flex-grow: 1;
    }
  }

  &__content {
    margin-top: 2rem;
    margin-left: 1rem;
  }

  &__content-header {
    margin-bottom: 1rem;

    & > *:not(:last-child) {
      margin-right: 2rem;
    }
  }

  &__title {
    @include f-size(m, 400);
    margin-bottom: 1rem;
  }

  &__price {
    @include f-size(xxl, 500);
    color: $color-white;
  }
  &__discount {
    @include f-size(ml, 500);
    color: $color-green;
  }
  &__old-price {
    @include f-size(ml, 400);
    color: rgba($color-white, 20%)
  }
}
</style>
