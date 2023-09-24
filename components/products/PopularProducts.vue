<template>
  <div class="popular-products">
    <PopularProductCard
      v-for="product in products"
      :product="product"
    />
  </div>
</template>
<script lang="ts" setup>
import PopularProductCard from "~/components/cards/PopularProductCard.vue";
import { COLOR_GREY_6 } from "~/assets/styles/variables";

const products = [
  {
    title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
    discount: '-15%',
    tags: [{
        name: 'Ключи',
        color: COLOR_GREY_6
      },
      {
        name: 'Аккаунт Steam',
        color: COLOR_GREY_6
      }
    ],
    imageSrc: 'product-image.png',
    oldPrice: '16 400',
    price: '16 400'
  }
]
</script>
<style lang="scss" scoped>
.popular-products {
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: 1rem;
  }
}
</style>
