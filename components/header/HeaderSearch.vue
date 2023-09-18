<template>
  <div class="header-search">
    <BaseLink to="/" class="header-search__logo">
      <IconLogo />
      <span>Playnchill</span>
    </BaseLink>
    <div class="header-search__input">
<!--      <BaseInput-->
<!--        v-model:myValue="myValue"-->
<!--        placeholder="Поиск"-->
<!--        @update:my-value="test($event)"-->
<!--      />-->
      {{myValue}}
      <BaseInput
        v-model="myValue"
        placeholder="Поиск"
      />
    </div>
    <div class="header-search__purchase">
      <div class="header-search__purchase-status">
        <span>{{myValue}}</span>
      </div>
      <div class="header-search__purchase-info">
        <IconHeart />
        <Cart />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseLink from "~/components/ui/BaseLink.vue";
import {Ref} from "@vue/reactivity";
const myValue = ref('') as Ref<string>

const test = (event) => {
  console.log('Event', event)
}

</script>
<style scoped lang="scss">
.header-search {
  display: flex;
  align-items: center;
  padding-top: 1.4rem;

  &__logo, &__purchase {
    flex-grow: 1;
  }

  &__input {
    flex-grow: 2;
  }

  &__purchase {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__purchase-info {
    display: flex;

    & > :first-child {
      margin-right: 2.5rem;
    }
  }

  &__purchase-status {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    & > span {
      color: $color-green;
      @include f-size(m, 500);
    }
  }

  &__logo {
    display: flex;
    @include f-size(h5, 800);

    & > span {
      margin-left: 1.1rem;
    }
  }
}
</style>

