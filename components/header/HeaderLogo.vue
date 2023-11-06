<template>
  <div class="header-logo">
    <BaseLink 
      to="/posts" 
      class="header-logo__link"
    >
      <BaseImage 
        width="84"
        height="25"
        :src="'/images/logo.png'"
      />
    </BaseLink>
  </div>
</template>
<style lang="scss" scoped>
.header-logo {
  flex: 1 0 auto;

  &__link {
    display: inline-flex;
  }
}
</style>