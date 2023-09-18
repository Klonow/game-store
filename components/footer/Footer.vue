<template>
  <footer class="footer">
    <BaseWrapper class="footer__header">
      <FooterPayments />
      <FooterNavigation />
      <p class="footer__general-information">Все продаваемые ключи закупаются у официальных дистрибьюторови издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza</p>
    </BaseWrapper>
    <FooterPolicy />
  </footer>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.footer {
  &__header {
    border-top: $border-dark-4;
    padding: 8rem 0 3.2rem;
  }

  &__payments {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
  }

  &__general-information {
    font-family: 'Inter', 'sans-serif';
    color: $color-grey-5;
    @include f-size(sl, 400);
    margin-top: 4.1rem;
  }
}
</style>
