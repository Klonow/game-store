<template>
  <PromoProductCard
    class="promo-product-card-minecraft-creeper"
    title="Играй уже сейчас в Minecraft"
    price="4 999 P"
    oldPrice="6 999 P"
    discount="-25%"
  >
    <template #image>
      <BaseImage
        class="promo-product-card-minecraft-creeper__img"
        fileName="minecraft-creeper.png"
      />
    </template>
  </PromoProductCard>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.promo-product-card-minecraft-creeper {
  background: $promo-card-gradient-green;

  &__img {
    position: absolute;
    top: -55px;
    right: 14px;
  }
}
</style>
