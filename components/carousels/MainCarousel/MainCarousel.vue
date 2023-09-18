<template>
  <BaseCarousel
    class="main-carousel"
    :items="carouselImages"
  >
    <template #content="{ items }">
      <MainCarouselSlide
        v-for="image in items"
        class="main-carousel__slide"
      >
        <div class="main-carousel__slide-content">
          <BaseImage
            class="main-carousel__slide-content-image"
            :fileName="'need-for-speed.png'"
          />
          <p class="main-carousel__slide-content-info">Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня. Адаптируйтесь и процветайте!</p>
          <div class="main-carousel__slide-content-prices">
            <span class="main-carousel__slide-content-price">4 999 Р</span>
            <span class="main-carousel__slide-content-discount">-25%</span>
            <span class="main-carousel__slide-content-old-price">6 999 Р</span>
          </div>
          <div class="main-carousel__slide-content-btns">
            <BaseButton
              view="opacity"
              indent="l"
              font-size="m"
            >В корзину</BaseButton>
            <BaseButton
              view="opacity"
              indent="l"
              font-size="m"
            >В избранное</BaseButton>
          </div>
        </div>
        <BaseImage
          class="main-carousel__image"
          :fileName="image"
        />
      </MainCarouselSlide>
    </template>
    <template #controls="{ prev, next }">
      <MainCarouselControls
        @prev="prev"
        @next="next"
      />
    </template>
    <template #indicators="{ items, activeImage }">
      <MainCarouselIndicators
        :items="items"
        :active-image="activeImage"
      />
    </template>
  </BaseCarousel>
</template>
<script lang="ts" setup>
import BaseCarousel from "~/components/ui/BaseCarousel.vue";
import BaseImage from "~/components/ui/BaseImage.vue";
import {ref} from "@vue/reactivity";
import MainCarouselIndicators from "~/components/carousels/MainCarousel/MainCarouselIndicators.vue";
import MainCarouselControls from "~/components/carousels/MainCarousel/MainCarouselControls.vue";
import MainCarouselSlide from "~/components/carousels/MainCarousel/MainCarouselSlide.vue";
import BaseButton from "~/components/ui/BaseButton.vue";

const carouselImages = ref([
  'slider-car.png',
  'cars-background.png',
  'slider-car2.png',
  'visa.png'
])

</script>
<style lang="scss" scoped>
.main-carousel {
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
