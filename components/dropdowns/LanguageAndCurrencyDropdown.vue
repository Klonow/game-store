<template>
  <BaseDropdown class="language-and-currency-dropdown">
    <template #trigger="{isOpen}">
      <div class="language-and-currency-dropdown__trigger">
        <span>RU</span>
        <span class="language-and-currency-dropdown__divider">/</span>
        <span>$</span>
        <IconArrow
          :side="isOpen ? 'top' : 'bottom'"
          class="language-and-currency-dropdown__icon-arrow"
        />
      </div>
    </template>
    <template #content>
      <div class="language-and-currency-dropdown__options">
        <div class="language-and-currency-dropdown__languages">
          <BaseButton
            v-for="language in Object.keys(Language)"
            :view="language === userStore.language ? 'primary' : 'clearly'"
            indent="s"
            fullWidth
            @click="userStore.setLanguage(language)"
          >
            {{ LanguageTranslate[language] }}
          </BaseButton>
        </div>
        <div class="language-and-currency-dropdown__currencies">
          <BaseButton
            v-for="currency in Object.keys(Currency)"
            :view="currency === userStore.currency ? 'primary' : 'clearly'"
            indent="s"
            fullWidth
            @click="userStore.setCurrency(currency)"
          >
            {{ CurrencySign[currency] }}
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseDropdown>
</template>
<script setup lang="ts">
import {CurrencySign, Currency, Language, LanguageTranslate} from "~/models/User";
import {useUser} from "~/stores/user";
import {storeToRefs} from "pinia";

const userStore = useUser()
const { userState } = storeToRefs(userStore)

</script>
<style lang="scss" scoped>
.language-and-currency-dropdown {

  &__icon-arrow {
    margin-left: .5rem;
    vertical-align: middle;
  }

  &__trigger {
    display: flex;
    align-items: center;
    @include f-size(m, 600);
    cursor: pointer;
  }

  &__divider {
    color: $color-grey-2;
  }

  &__options {
    color: $color-white;
    background: $color-dark-2;
    width: 13rem;
    border-radius: .3rem;
  }

  &__currencies {
    display: flex;
    padding: .9rem .7rem;

    & > *:not(:last-child) {
      margin-right: .7rem;
    }
  }

  &__languages {
    padding: .7rem .5rem;
    border-bottom: $border-dark-3;
  }
  &__languages > *:nth-child(1) {
    margin-bottom: .5rem;
  }
}
</style>
