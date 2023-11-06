<template>
  <header class="header">
    <BaseContainer class="header__container">
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderAction />
    </BaseContainer>
  </header>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.header {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 12.1rem;
  }
}
</style>
