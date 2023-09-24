<template>
  <div class="examples">
    <h1>Examples</h1>
    <div class="buttons">
      <h4>Buttons</h4>

      <BaseButton
        view="primary"
        indent="m"
        fullWidth
        fontSize="xs"
        borderRadius="m"
      >
        / view = green /
      </BaseButton>
      <BaseButton
        view="grey"
        indent="m"
        fullWidth
        fontSize="xs"
        borderRadius="m"
      >
        / view = grey /
      </BaseButton>

      <BaseButton
        view="clearly"
        indent="m"
        fullWidth
        fontSize="xs"
        borderRadius="m"
      >
        / view = clearly /
      </BaseButton>

      <BaseButton
          view="transparent"
          indent="m"
          fullWidth
          fontSize="xs"
          borderRadius="m"
      >
        / view = transparent /
      </BaseButton>

      <BaseButton
        view="secondary"
        indent="m"
        fullWidth
        fontSize="xs"
        borderRadius="m"
      >
        / view = opacity /
      </BaseButton>

      <BaseButton
        view="clearly-white"
        indent="m"
        fullWidth
        fontSize="xs"
        borderRadius="m"
      >
        / view = clearly-white /
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
        view="primary"
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
    <div class="titles">
      <h1>All font-sizes what this project has.</h1>
      <ol>
        <li><h1>This is H1</h1></li>
        <li><h2>This is H2</h2></li>
        <li><h3>This is H3</h3></li>
        <li><h4>This is H4</h4></li>
        <li><h5>This is H5</h5></li>
        <li><h6>This is H6</h6></li>
        <li class="titles_s">This is S</li>
        <li class="titles_sm">This is SM</li>
        <li class="titles_sk">This is SK</li>
        <li class="titles_sl">This is SL</li>
        <li class="titles_m">This is M</li>
        <li class="titles_ml">This is ML</li>
        <li class="titles_l">This is L</li>
        <li class="titles_al">This is AL</li>
        <li class="titles_xl">This is XL</li>
        <li class="titles_xxl">This is XXL</li>
        <li class="titles_h5">This is H5</li>
        <li class="titles_h4">This is H4</li>
      </ol>
    </div>

    <div class="base-tags">
      <h1>Base Tags</h1>
      <BaseTags :tags="tags"></BaseTags>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useHead} from "#head";
import BaseButton from "~/components/ui/BaseButton.vue";
import {useNuxtApp} from "#app";
import ProductInfoModal from "~/components/modals/ProductInfoModal.vue";
import {COLOR_GREY_6} from "~/assets/styles/variables";
useHead({
  title: 'Example components',
})

const tags = [
  {
    name: 'Ключи',
    color: COLOR_GREY_6
  },
  {
    name: 'Аккаунт Steam',
    color: COLOR_GREY_6
  }
]

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

.titles {
  &_s {
    @include f-size(s);
  }
  &_sm {
    @include f-size(sm);
  }
  &_sk {
    @include f-size(sk);
  }
  &_sl {
    @include f-size(sl);
  }
  &_m {
    @include f-size(m);
  }
  &_ml {
    @include f-size(ml);
  }
  &_l {
    @include f-size(l);
  }
  &_al {
    @include f-size(al);
  }
  &_xl {
    @include f-size(xl);
  }
  &_xxl {
    @include f-size(xxl);
  }
  &_h5 {
    @include f-size(h5)
  }
  &_h4 {
    @include f-size(h4)
  }
}
</style>
