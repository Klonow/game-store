<template>
  <BaseCarousel
    class="promo-cards-carousel"
    :items="[1, 2, 3]"
  >
    <template #content="{ items }">
      <PromoCardsCarouselSlide class="promo-cards-carousel__slide-content">
        <PromoProductCardMinecraftCreeper />
        <PromoProductCardMinecraftHunters />
      </PromoCardsCarouselSlide>
    </template>
    <template #controls="{ prev, next }">
      <MainCarouselControls
        @prev="prev"
        @next="next"
      />
    </template>
  </BaseCarousel>
</template>
<script lang="ts" setup>
import BaseCarousel from "~/components/ui/BaseCarousel.vue";
import MainCarouselControls from "~/components/carousels/MainCarousel/MainCarouselControls.vue";
import PromoProductCardMinecraftHunters from "~/components/cards/PromoProductCardMinecraftHunters.vue";
import PromoProductCardMinecraftCreeper from "~/components/cards/PromoProductCardMinecraftCreeper.vue";

</script>
<style lang="scss" scoped>
.promo-cards-carousel {
  &__slide:not(:last-child) {
    margin-right: 1.5rem;
  }

  &__slide-content-btns {
    display: flex;
    margin-top: 4rem;

    & > *:first-child {
      margin-right: 1rem;
    }
  }

  &__slide-content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 0 12rem;

    &-image {
      margin-bottom: 2rem;
    }

    &-info {
      width: 58rem;
      @include f-size(xxl, 400);
      margin-bottom: 4rem;
    }

    &-prices > *:not(:last-child) {
      margin-right: 1.7rem;
    }

    &-price {
      @include f-size(h5, 800);
      line-height: 4.1rem;
    }

    &-discount {
      @include f-size(al, 800);
      color: $color-green;
    }

    &-old-price {
      color: rgba(255, 255, 255, 0.3);
      @include f-size(al, 600);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    background: linear-gradient(72.65deg, #06030F -2.49%, rgba(6, 3, 15, 0) 53.71%);
    border-radius: 2rem;
  }
}
</style>
