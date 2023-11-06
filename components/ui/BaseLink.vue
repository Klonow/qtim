<template>
  <NuxtLink 
    v-bind="$attrs" 
    :class="classList"
  >
    <slot />
  </NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'icon' | 'underline'>,
    default: 'primary'
  },
  fontSize: {
    type: String as PropType<'s' | 'm'>,
    default: 'm'
  },
  lineHeightSize: {
    type: String as PropType<'s' | 'sm' | 'm'>,
  }
})

const classList = computed(() => [
  `base-link`,
  `base-link__variant_${props.variant}`,
  `base-link__font-size_${props.fontSize}`,
  `base-link__line-height_${props.lineHeightSize}`,
])
</script>
<style lang="scss" scoped>
.base-link {
  transition: color, border-color, $transition-time-short ease;

  &__font-size {
    &_s {
      @include f-size(s, 400);
    }

    &_m {
      @include f-size(m, 400);
    }
  }

  &__line-height {
    &_s {
      @include line-height(s);
    }

    &_sm {
      @include line-height(sm);
    }

    &_m {
      @include line-height(m);
    }
  }

  &__variant {
    &_primary {
      color: $color-dark;

      &:hover {
        color: $color-gray;
      }

    }
    &_secondary {
      color: $color-pink;
      line-height: 2.4rem;

      &:hover {
        color: $color-gray;
      }
    }
    &_icon {
      display: flex; 
      justify-content: center; 
      align-items: center;
      background-color: $color-dark; 
      width: 3.2rem; 
      height: 3.2rem; 
      border-radius: 50%; 

      &:hover {
        background-color: $color-dark-1;
      }
    }
    &_underline {
      color: $color-dark;
      border-bottom: 0.04rem solid $color-dark;
      line-height: 1.92rem;

      &:hover {
        color: $color-gray;
        border-bottom-color: $color-gray;
      }
    }
  }
}
</style>
