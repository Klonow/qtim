<template>
  <ul class="footer-links-list">
    <li 
      v-for="({ link, name }, index) in links" 
      :key="index" 
      class="footer-links__item"
    >
      <BaseLink 
        class="footer-links-list__link"
        variant="underline" 
        fontSize="s"
        lineHeightSize="s"
        :to="link"
      >
        {{ name }}
      </BaseLink>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import type { Link } from "~/types/Navigation";

defineProps({
  links: {
    type: Array as PropType<Link[]>,
  }
})
</script>
<style lang="scss" scoped>
.footer-links-list {
  display: flex;

  &__link {
    letter-spacing: 0.02rem;
  }

  & > *:not(:last-child) {
    margin-right: 3.2rem;
  }
}
</style>
