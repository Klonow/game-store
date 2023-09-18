<template>
  <div :class="classList">
    <div :class="contentClassList">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";

interface BaseBadgeProps {
  view?: 'bright',
  indent?: 'xs' | 's' | 'm' | 'l',
  fontSize?: 'xs' | 's' | 'm',
  borderRadius?: 'xs' | 'm',
}

const props = withDefaults(defineProps<BaseBadgeProps>(), {
  view: 'bright',
  indent: 'xs',
  fontSize: 'xs',
  borderRadius: 'xs'
})

const classList = computed(() => ([
  'base-badge',
  `base-badge_view_${props.view}`,
  `base-badge_indent_${props.indent}`,
  `base-badge_border-radius_${props.borderRadius}`,
  `base-badge_font-size_${props.fontSize}`,
]))

const contentClassList = computed(() => ([
  'base-badge__content',
  'base-badge__content_view_bright',
]))

</script>

<style lang="scss" scoped>
.base-badge {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  transition: color
    .15s ease-in-out,background-color
    .15s ease-in-out, border-color
    .15s ease-in-out, box-shadow
    .15s ease-in-out;

  &_view {
    &_bright {
      background: $color-dark;
    }
  }
  &__content {
    &_view {
      &_bright {
        @include brightGradient;
      }
    }
  }


  &_indent {
    &_xs {
      padding: .7rem 1.3rem;
    }
    &_s {}
    &_m {}
    &_l {}
  }

  &_font-size {
    &_xs {
      @include f-size(m, 800);
    }
    &_s {
    }
    &_m {
    }
  }

  &_border-radius {
    &_xs {
      border-radius: .8rem;
    }
    &_m {
    }
  }
}
</style>
