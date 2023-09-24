<template>
  <PromoProductCard
    class="promo-product-card-minecraft-hunters"
    title="Играй уже сейчас в Minecraft dangerous"
    price="4 999 P"
    oldPrice="6 999 P"
    discount="-25%"
  >
    <template #image>
      <BaseImage
        class="promo-product-card-minecraft-hunters__img"
        fileName="minecraft-hunters.png"
      />
    </template>
  </PromoProductCard>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.promo-product-card-minecraft-hunters {
  background: $promo-card-gradient-orange;

  &__img {
    position: absolute;
    top: -50px;
    right: -115px;
  }
}
</style>
