<template>
  <div class="footer-links">
    <FooterLinksList :links="links.leftPart" />
    <div class="footer-links__additional-element-wrapper">
      <span class="footer-links__additional-element">Go</span>
    </div>
    <FooterLinksList :links="links.rightPart" />
  </div>
</template>
<script setup lang="ts">
import type { Link } from '~/types/Navigation';

const links: { leftPart: Link[], rightPart: Link[] } = {
  leftPart: [
    { link: '#', name: 'Facebook' },
    { link: '#', name: 'Instagram' },
    { link: '#', name: 'Telegram' },
  ],
  rightPart: [
    { link: '#', name: 'Behance' },
    { link: '#', name: 'Linkedn' },
    { link: '#', name: 'Privacy Policy' },
  ]
}

</script>
<style lang="scss" scoped>
.footer-links {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  align-items: baseline;
  overflow: hidden;
  padding-top: 13rem;

  &__additional-element-wrapper {
    position: relative;
    
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 35.8rem;
      height: 35.8rem; 
      top: -12rem;
      right: -16rem;
      border-radius: 50%;
      background: $color-dark;
      bottom: 0;
    }
  }

  &__additional-element {
    position: relative;
    @include f-size(l);
    @include line-height(l);
    color: $color-white;
  }
}
</style>
