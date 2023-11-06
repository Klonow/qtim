<template>
  <button
    :type="props.type"
    :class="classList"
    :disabled="isDisabled"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import {computed} from "@vue/reactivity";

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'ashen' | 'clear',
  type?: 'submit' | 'button',
  indent?: 's' | 'm' | 'l',
  fontSize?: 'm',
  borderRadius?: 'round' | 'm' | 's',
  lineHeightSize?: 'm',
  isDisabled?: boolean,
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  variant: 'primary',
  type: 'button',
  fontSize: 'm',
  borderRadius: 'm',
  lineHeightSize: 'm',
  isDisabled: false
})

const classList = computed(() => ([
  'base-button',
  `base-button_variant_${props.variant}`,
  `base-button_font-size_${props.fontSize}`,
  `base-button_line-height_${props.lineHeightSize}`,
  `base-button_border-radius_${props.borderRadius}`,
  props.indent && `base-button_indent_${props.indent}`
]))
</script>
<style lang="scss" scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color, $transition-time-short ease;
  flex: 1 0 auto;

  &:disabled {
    background-color: $color-gray;
    color: $color-gray-2;
    cursor: default;

    &:hover {
      background-color: $color-gray;
    }
  }
  
  &_variant {
    &_primary {
      color: $color-white;
      background-color: $color-dark;

      &:hover {
        background-color: $color-dark-1;
      }
    }

    &_secondary {
      color: $color-white;
      background-color: $color-white;
      border: .2rem solid $color-gray-2;

      &:hover {
        background-color: $color-gray-2;
      }
    }

    &_ashen {
      color: $color-dark;
      background-color: $color-gray-1;

      &:hover {
        background-color: $color-gray-2;
      }
    }

    &_clear {
      color: $color-dark;
      background-color: $color-white;
      border: .1rem solid $color-gray-3;

      &:hover {
        background-color: $color-gray-2;
      }
    }
  }

  &_font-size {
    &_m {
      @include f-size(m, 400);
    }
  }

  &_line-height {
    &_m {
      @include line-height(m);
    }
  }

  &_border-radius {
    &_m {
      border-radius: 2.5rem;
    }
    &_s {
      border-radius: 1.2rem;
    }
    &_round {
      border-radius: 50%;
    }
  }

  &_indent {
    &_s {
      padding: 1.65rem;
    }
    &_m {
      padding: 1.4rem;
    }
    &_l {
      padding: 1.6rem 3.2rem;
    }
  }
}
</style>
