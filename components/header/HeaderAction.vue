<template>
  <div class="header-action">
    <BaseButton 
      variant="secondary" 
      borderRadius="round" 
      indent="m"
      lineHeightSize="m"
      fontSize="m"
      class="header-select"
    >
      <BaseImage 
        width="24" 
        height="24" 
        :src="'/images/flag.png'"
      />
    </BaseButton>
    <BaseButton 
      variant="primary" 
      borderRadius="m" 
      indent="l"
    >Let’s work</BaseButton>
  </div>
</template>
<style lang="scss" scoped>
.header-action {
  display: flex;

  & > *:first-child {
    margin-right: 1.6rem;
  }
}
</style>