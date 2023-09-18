<template>
  <div class="products">
    <MainCarousel class="products__carousel" />
    <BaseWrapper>
      <div class="products__exclusive">
        <h2>Топ 4</h2>
        <IconLightning />
      </div>
      <div class="products__exclusive-list">
        <PopularProductCard
          v-for="product in products"
          :product="product"
        />
      </div>
    </BaseWrapper>
  </div>
</template>
<script lang="ts" setup>
import MainCarousel from "~/components/carousels/MainCarousel/MainCarousel.vue";
import BaseWrapper from "~/components/ui/BaseWrapper.vue";
import IconLightning from "~/components/icons/IconLightning.vue";
import PopularProductCard from "~/components/cards/PopularProductCard.vue";

const products = [
  {
    title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
    discount: '-15%',
    tags: ['Буст', 'Origin'],
    imageSrc: 'product-image.png',
    oldPrice: '16 400',
    price: '16 400'
  }
]
</script>
<style lang="scss" scoped>
.products {
  &__carousel {
    margin-bottom: 8rem;
  }

  &__exclusive {
    display: flex;
    align-items: center;

    &:first-child {
      margin-right: 1rem;
    }
  }

  &__exclusive-amount {
    //@include f-size(h5, 600);
    //margin-right: 1rem;
  }
}
</style>
