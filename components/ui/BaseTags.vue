<template>
  <ol class="base-tags">
    <li
      v-for="tag in tags"
      class="base-tags__item"
      :style="{ '--colorTag': tag.color }"
    >{{ tag.name }}</li>
  </ol>
</template>
<script setup lang="ts">
export type Tag = {
  name: string
  color: string
}

const props = defineProps<{ tags: Tag[] }>()
</script>
<style lang="scss" scoped>
.base-tags {
  display: flex;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  &__item {
    display: flex;
    align-items: center;
    color: $color-grey-7;
    @include f-size(sk, 500);

    &:before {
      display: inline-block;
      content: '';
      width: 1.4rem;
      height: 1.4rem;
      background: var(--colorTag);
      border-radius: 50%;
      opacity: 50%;
      margin-right: .9rem;
    }
  }
}
</style>
