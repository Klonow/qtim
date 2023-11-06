<template>
  <div :class="classList">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  size: {
    type: String as PropType<'l' | 'm'>,
    default: 'l'
  },
})
const classList = computed(() => [
  'base-container',
  `base-container__size_${props.size}`,
])

</script>
<style lang="scss">
.base-container {
  margin: 0 auto;
  background: transparent;
  z-index: -1;
 
  &__size {
    &_m {
      max-width: 121.6rem;
    }
    &_l {
      max-width: 136rem;
    }
  }
}
</style>
