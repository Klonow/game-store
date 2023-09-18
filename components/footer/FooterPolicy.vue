<template>
  <div class="footer-policy">
    <BaseWrapper class="footer-policy__wrapper">
      <BaseLink view="primary">
        Правовая информация
      </BaseLink>
      <span class="footer-policy__sign">Интернет-магазин игр «Playnchill» © 2022 </span>
      <div class="footer-policy__cooperation">
        <LanguageAndCurrencyDropdown
          class="footer-policy__dropdown"
          contentSide="top"
        />
        <div class="footer-policy__socials">
          <BaseLink to="#">
            <IconVk />
          </BaseLink>
          <BaseLink to="#">
            <IconDiscord />
          </BaseLink>
          <BaseLink to="#">
            <IconTwitter />
          </BaseLink>
          <BaseLink to="#">
            <IconInstagram />
          </BaseLink>
        </div>
      </div>
    </BaseWrapper>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.footer-policy {
  border-top: $border-dark-4;
  padding: 2.5rem 0 3.8rem;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__sign {
    color: $color-grey-5;
    @include f-size(ml, 400);
    font-family: 'Inter', 'sans-serif';
  }

  &__cooperation {
    display: flex;
  }

  &__dropdown {
    margin-right: 2rem;
  }

  &__socials {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 2.6rem;
    }
  }
}
</style>
<script>
import BaseLink from "../ui/BaseLink";
export default {
  components: {BaseLink}
}
</script>
