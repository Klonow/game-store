<template>
  <div class="header-navigation">
    <div class="header-navigation__bank">
      <LanguageAndCurrencyDropdown />
      <span class="header-navigation__savings">Накопительный счет</span>
    </div>
    <div class="header-navigation__navigation">
      <ul
        class="header-navigation__navigation-list"
      >
        <li
          v-for="navigationItem in navigationItems"
          class="header-navigation__navigation-item"
        >
          <BaseLink view="regular" to="#">{{ navigationItem.name }}</BaseLink>
        </li>
      </ul>
    </div>
    <div class="header-navigation__account">
      <div class="header-navigation__username">
        Hanzed Rules
      </div>
      <BaseAvatar
        size="s"
        form="round"
        imageSrc="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
      />
    </div>
  </div>
</template>
<script lang="ts" setup>

import BaseLink from "~/components/ui/BaseLink.vue";

interface NavigationItem {
  link: string,
  name: string
}
const navigationItems = <NavigationItem[]>[
  {
    link: '#',
    name: 'Отзывы'
  },
  {
    link: '#',
    name: 'Гарантии'
  },
  {
    link: '#',
    name: 'Как купить'
  },
  {
    link: '#',
    name: 'Накопительная'
  },
  {
    link: '#',
    name: 'Заработай'
  },
]
</script>
<style scoped lang="scss">
.header-navigation {
  display: flex;
  align-items: center;

  &__navigation-list {
    display: flex;

    & > *:not(:last-child) {
      margin-right: 3.3rem;
    }
  }

  &__navigation-item {
    @include f-size(m, 600);
  }

  &__username {
    margin-right: 2.5rem;
  }

  &__account {
    flex-grow: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__bank, &__navigation {
    flex-grow: 1;
  }

  &__bank {
    display: flex;
    align-items: center;
  }

  &__savings {
    @include f-size(m, 600);
    margin-left: 2.3rem;
  }
}
</style>
