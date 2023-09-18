<template>
  <input
    class="base-input"
    v-bind="$attrs"
    :value="props.modelValue"
    @input="updateInput"
  />
<!--  <IconMagnifyingGlass />-->
</template>
<script lang="ts" setup>
const props = defineProps({
  myValue: [String, Number],
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
const updateInput = (event: any) => {
  // emit('update:myValue', event.target.value)
  emit('update:modelValue', event.target.value)
}
</script>
<style lang="scss" scoped>
.base-input {
  height: 6.6rem;
  max-width: 64.6rem;
  width: 100%;
  background: rgba(196, 196, 196, 0.05);
  border-radius: 1.5rem;
  padding: 2.2rem 3rem;
  color: $color-white;
  @include f-size(m, 400);

  //&:active, &:focus {
  //  outline: none;
  //  border: none;
  //}

  &::placeholder {
    color: $color-grey-3;
  }
}
</style>
