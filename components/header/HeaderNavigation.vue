<template>
  <nav class="header-navigation">
    <ul class="header-navigation__list">
      <li 
        v-for="({ link, name }, index) in links"
        :key="index"  
        class="header-navigation__item"
      >
        <BaseLink 
          fontSize="m" 
          lineHeightSize="m"
          :to="link"
        >{{ name }}</BaseLink>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import type { Link } from "~/types/Navigation";

const links = <Link[]>[
  {
    link: '#',
    name: 'Works'
  },
  {
    link: '#',
    name: 'About'
  },
]
</script>
<style scoped lang="scss">
.header-navigation {
  display: flex;
  align-items: center;
  margin-right: 9.1rem;

  &__list {
    display: flex;

    & > *:not(:last-child) {
      margin-right: 5.8rem;
    }
  }
}
</style>
