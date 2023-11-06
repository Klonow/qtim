<template>
  <footer class="footer">
    <BaseContainer 
      size="m" 
      class="footer__container"
    >
      <div class="footer__top-content">
        <FooterTitles />
        <div class="footer__contacts-wrapper">
          <FooterContacts />
        </div>
      </div>
      <FooterLinks class="footer__links" />
    </BaseContainer>
  </footer>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.footer {
  background: $color-pink;
  padding-top: 14rem;

  &__links {
    margin-top: 13.2rem;
  }

  &__top-content {
    display: flex;
  }

  &__contacts-wrapper {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    padding-left: 16.6rem;
    padding-top: 7.6rem;
  }
}
</style>
