<template>
  <button
    :type="props.type"
    :class="classList"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import {computed} from "@vue/reactivity";

interface BaseButtonProps {
  view?: 'primary' | 'secondary' | 'grey' | 'transparent' | 'clearly' | 'clearly-white',
  type?: 'submit' | 'button',
  indent?: 'xs' | 's' | 'm' | 'l',
  fontSize?: 'xs' | 's' | 'm',
  fullWidth?: boolean,
  borderRadius?: 'xs' | 'm',
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  view: 'clearly',
  type: 'button',
  indent: 'xs',
  fontSize: 's',
  fullWidth: false,
  borderRadius: 'xs',
})

const classList = computed(() => ([
  'base-button',
  `base-button_view_${props.view}`,
  `base-button_indent_${props.indent}`,
  `base-button_font-size_${props.fontSize}`,
  `base-button_border-radius_${props.borderRadius}`,
  props.fullWidth && `base-button__full-width`
]))
</script>
<style lang="scss" scoped>
@mixin regular-button(
  $color,
  $color-bg,
  $color-border: none,
  $color-hover: none,
  $color-hover-bg: none,
  $color-hover-border: none,
) {
  color: $color;
  background-color: $color-bg;
  border-color: $color-border;

  &:hover {
    color: $color-hover;
    background-color: $color-hover-bg;
    border-color: $color-hover-border;
  }
}

.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  transition: background-color, $transition-time-long ease;

  &__full-width {
    width: 100%;
  }

  &_view {
    &_primary {
      @include regular-button(
        $color-white, $color-green, none,$color-white, rgba($color-green, 0.8)
      );
    }

    &_secondary {
      @include regular-button(
        $color-white, rgba($color-white, 5%), none, $color-dark-5, $color-white
      );
    }

    &_clearly {
      @include regular-button(
        $color-white, none, none, $color-white, rgba($color-green, 0.5)
      );
    }

    &_clearly-white {
      @include regular-button(
        $color-white, none, none, $color-white, rgba($color-white, 0.1)
      );
    }

    &_grey {
      @include regular-button(
        $color-white, $color-dark-3, none, $color-white, rgba($color-green, 0.5)
      );
    }
  }


  &_font-size {
    &_xs {

    }
    &_s {
      @include f-size(s, 300);
    }
    &_m {
      @include f-size(ml, 600);
    }
  }

  &_border-radius {
    &_xs {
      border-radius: .5rem;
    }
    &_m {
      border-radius: 1.2rem;
    }
  }

  &_indent {
    &_xs {
      padding: .4rem 1rem;
    }

    &_s {
      padding: .4rem 1.3rem;
    }

    &_m {
      padding: 1.7rem 4rem;
    }

    &_l {
      padding: 2.3rem 4rem;
    }
  }
}
</style>
