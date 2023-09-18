<template>
  <div class="product-info-modal">
    <BaseImage />
    <div>
      <h3>Купить Онлайн FORZA HORIZON 4 + DLC + Игры| Автоактивация дешево</h3>
      <p>На нашем сайте вы можете купить Minecraft дешево по самой выгодной цене. До сих пор ищете где купить аккаунт или ключ Minecraft на платформе Mojang или других? Тогда вы обратились по адресу!</p>
      <p>Огромный выбор самых разных и интересных предложений с Minecraft по самым выгодным ценам!</p>
      <p>Мы собрали для вас лучшие предложения от продавцов по самым привлекательным и низким ценам. Благодаря тому, что мы торговая площадка, продавцы соревнуются за самую выгодную цену для вас. Ознакомьтесь со всеми предложениями в наличии ниже!</p>
    </div>
    <BaseButton @click="closeModal">Купить онлайн</BaseButton>
    <div>44 000 Р</div>
  </div>
</template>
<script lang="ts" setup>

import BaseImage from "~/components/ui/BaseImage.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import {useModal} from "~/stores/modal";

const modalStore = useModal()

const closeModal = () => {
  modalStore.close()
}

</script>
<style lang="scss">
  .product-info-modal {
    max-width: 30rem;
    overflow-y: visible;
  }
</style>
