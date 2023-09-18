<template>
  <div class="footer-payments">
    <div class="footer-payments__logos">
      <BaseImage
        v-for="fileName in fileNamesImages"
        :fileName="fileName"
      />
    </div>
    <p class="footer-payments__information">Все продаваемые ключи закупаются у официальных дистрибьюторови издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza</p>
  </div>
</template>
<script lang="ts" setup>
const fileNamesImages = [
  'paypal.png',
  'mastercard.png',
  'visa.png',
  'mir.png',
  'webmoney.png',
  'paypal.png',
  'paypal.png'
]
</script>
<style lang="scss" scoped>
.footer-payments {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 6rem;

  &__logos {
    display: flex;
    justify-content: space-between;
  }

  &__information {
    font-family: 'Inter', 'sans-serif';
    color: $color-grey-5;
    @include f-size(sl, 400);
    margin-top: 4.1rem;
  }
}
</style>
