<template>
  <div class="examples">
    <h1>Examples</h1>
    <div class="buttons">
      <h4>Buttons</h4>
      <BaseButton
        view="green"
        indent="m"
        fullWidth
        fontSize="xs"
        borderRadius="m"
      >
        Test button / green / m
      </BaseButton>
      <BaseButton
        view="grey"
        indent="xs"
        fontSize="s"
        borderRadius="m"
      >
        Test button
      </BaseButton>
      <BaseButton
        view="transparent"
        indent="s"
        fontSize="m"
        borderRadius="xs"
      >
        Test button / transparent / s
      </BaseButton>
      <BaseButton
        view="opacity"
        indent="l"
      >
        Test button / opacity / l
      </BaseButton>
      <BaseButton
        view="white"
        indent="m"
        borderRadius="m"
      >
        Test button / white / m
      </BaseButton>
    </div>
    <div class="links">
      <h4>Links</h4>
      <BaseLink view="primary">Base Link | Primary</BaseLink>
      <BaseLink view="regular">Base Link | Regular</BaseLink>
    </div>
    <div class="modals">
      <h4>Modals</h4>
      <BaseButton
        borderRadius="xs"
        fontSize="xs"
        indent="xs"
        type="button"
        view="green"
        @click="openModal"
      >Open modal</BaseButton>
    </div>
    <div class="dropdowns">
      <h4>Dropdowns</h4>
      <LanguageAndCurrencyDropdown />
    </div>
    <div class="carousels">
      <h4>Carousels</h4>
      <MainCarousel />
    </div>
    <div class="icons">
      <h4>Icons</h4>
      <IconArrow />
      <IconCart />
      <IconDiscord />
      <IconGoogleSignPayment />
      <IconHeart />
      <IconInstagram />
      <IconLightning />
      <IconLogo />
      <IconMagnifyingGlass />
      <IconTwitter />
      <IconVk />
      <IconWebmoney/>
    </div>
    <div class="cards">
      <h4>Cards</h4>
      <PopularProductCard
        :product="{
          title: 'XBOX GAME PASS ULTIMATE + EA PLAY 14 JOURS | RENOUVELL...',
          discount: '-15%',
          tags: ['Буст', 'Origin'],
          imageSrc: 'product-image.png',
          oldPrice: '16 400',
          price: '16 400'
        }"
      />
    </div>
    <div class="badges">
      <h4>Badges</h4>
      <BaseBadge view="bright">
        <span>Top</span>
        <IconLightning
          align="middle"
          style="margin: 0 .2rem; transform: none;}"
          width="12"
          height="17"
        />
        <span>4</span>
      </BaseBadge>
      <BaseBadge>Lol whate?</BaseBadge>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useHead} from "#head";
import BaseButton from "~/components/ui/BaseButton.vue";
import {useNuxtApp} from "#app";
import ProductInfoModal from "~/components/modals/ProductInfoModal.vue";

useHead({
  title: 'Example components',
})

const { $services } = useNuxtApp();

const openModal = () => {
  $services.modal.open(ProductInfoModal)
}
</script>
<style lang="scss" scoped>
.buttons {
}

.badges {
  margin-top: 3rem;
  background: $color-white;
  padding: 2rem;
}
</style>
