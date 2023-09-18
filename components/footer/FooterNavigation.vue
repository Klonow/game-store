<template>
  <div class="footer-navigation">
    <div class="footer-navigation__helpful-links">
      <span class="footer-navigation__column-title">О компании</span>
      <ul class="footer-navigation__column-list">
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">О нас</BaseLink>
        </li>
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">Вакансии</BaseLink>
        </li>
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">Реквизиты</BaseLink>
        </li>
      </ul>
    </div>
    <div class="footer-navigation__helpful-links">
      <span class="footer-navigation__column-title">О компании</span>
      <ul class="footer-navigation__column-list">
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">О нас</BaseLink>
        </li>
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">Вакансии</BaseLink>
        </li>
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">Реквизиты</BaseLink>
        </li>
      </ul>
    </div>
    <div class="footer-navigation__helpful-links">
      <span class="footer-navigation__column-title">О компании</span>
      <ul class="footer-navigation__column-list">
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">О нас</BaseLink>
        </li>
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">Вакансии</BaseLink>
        </li>
        <li class="footer-navigation__column-item">
          <BaseLink view="regular" to="#">Реквизиты</BaseLink>
        </li>
      </ul>
    </div>
    <div class="footer-navigation__payments-verified-signs">
      <div class="footer-navigation__payment-sign">
        <IconWebmoney />
        <div class="footer-navigation__payment-sign-info">
          <span>verified</span>
          <span>WebMoney</span>
        </div>
      </div>
      <div class="footer-navigation__payment-sign">
        <IconGoogleSignPayment />
        <div class="footer-navigation__payment-sign-info">
          <span>verified</span>
          <span>WebMoney</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BaseLink from "~/components/ui/BaseLink.vue";
</script>
<style lang="scss" scoped>
.footer-navigation {
  display: flex;
  justify-content: space-between;

  &__column-title {
    @include f-size(xl, 600);
    color: $color-white;
  }

  &__column-list {
    margin-top: 2.7rem;

    & > *:not(:last-child) {
      margin-bottom: 2.1rem;
    }
  }

  &__column-item {
    @include f-size(l, 400);
    color: $color-grey-4;
  }

  &__payments-verified-signs {
    display: flex;
    gap: 3.6rem;
  }

  &__payment-sign {
    display: flex;
    align-items: center;
    gap: .9rem;
  }

  &__payment-sign-info {
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', 'sans-serif';

    & > span {
      &:first-child {
        @include f-size(sm, 300);
      }
      &:last-child {
        @include f-size(sm, 700);
      }
    }
  }
}
</style>
