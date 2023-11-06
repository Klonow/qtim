<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    :class="classList"
  >
    <path
      d="M9.5 7.5L14.5 12.5L9.5 17.5"
      stroke="#494949"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script lang="ts" setup>
import type { PropType } from "@vue/runtime-core";

const props = defineProps({
  side: {
    type: String as PropType<"left" | "right">,
    default: "right",
  },
  color: {
    type: String as PropType<"green" | "white">,
    default: "green",
  },
});

const classList = computed(() => [
  'icon-arrow',
  `icon-arrow_side_${props.side}`,
]);
</script>
<style lang="scss" scoped>
.icon-arrow {
  &_side {
    &_right {
      transform: rotate(0);
    }

    &_left {
      transform: rotate(180deg);
    }
  }
}
</style>
