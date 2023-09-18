<template>
  <div class="base-carousel">
    <div
      class="base-carousel__inner"
      ref="carouselRef"
    >
      <slot
        name="content"
        :items="items"
      />
    </div>
    <slot
      name="controls"
      :prev="scrollToLeft"
      :next="scrollToRight"
    />
    <slot
      name="indicators"
      :items="items"
      :activeImage="initValues.activeImage"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive, Ref, ref } from "@vue/reactivity";
import { onMounted } from "vue";

const carouselRef = ref<Ref<HTMLDivElement>>(null)

const props = defineProps({
  items: {
    type: Array,
    default: [],
  }
})

const initValues = reactive({
  marginBetweenElements: 15,
  translateValue: 0,
  fullSizeImage: 1170,
  activeImage: 0
})

function setTranslate(translateValue: number) {
  carouselRef.value.style.transform = `translate3d(${translateValue}px, 0, 0)`
}

function scrollToRight() {
  if (initValues.activeImage !== (props.items?.length - 1)) {
    initValues.activeImage += 1
    initValues.translateValue -= (initValues.fullSizeImage + initValues.marginBetweenElements)
    setTranslate(initValues.translateValue)
  }
}

function scrollToLeft() {
  if (initValues.activeImage !== 0) {
    initValues.activeImage -= 1
    initValues.translateValue += (initValues.fullSizeImage + initValues.marginBetweenElements)
    setTranslate(initValues.translateValue)
  }
}

onMounted(() => {
  initValues.translateValue = (window.innerWidth - 1170) / 2
})

</script>
<style lang="scss" scoped>
$default-carousel-translate: calc((100vw - 1170px) / 2);

.base-carousel {
  position: relative;
  overflow: hidden;

  &__inner {
    z-index: 1;
    position: relative;
    display: flex;
    transform: translate3d($default-carousel-translate, 0, 0);
    transition: transform .5s ease-in-out;

    & > *:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
}
</style>
