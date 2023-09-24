<template>
  <div class="products">
    <MainCarousel class="products__carousel" />
    <BaseWrapper>
      <div class="products__exclusive">
        <h2>Топ 4</h2>
        <IconLightning />
      </div>
      <PopularProducts />
      <PromoProductCardMinecraftCreeper />
      <PromoProductCardMinecraftHunters />
    </BaseWrapper>
  </div>
</template>
<script lang="ts" setup>
import MainCarousel from "~/components/carousels/MainCarousel/MainCarousel.vue";
import BaseWrapper from "~/components/ui/BaseWrapper.vue";
import IconLightning from "~/components/icons/IconLightning.vue";
import PromoProductCardMinecraftCreeper from "~/components/cards/PromoProductCardMinecraftCreeper.vue";
import PromoProductCardMinecraftHunters from "~/components/cards/PromoProductCardMinecraftHunters.vue";
</script>
<style lang="scss" scoped>
.products {
  &__carousel {
    margin-bottom: 8rem;
  }
}
</style>
