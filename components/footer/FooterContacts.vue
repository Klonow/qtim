<template>
  <div class="footer-contacts">
    <div class="footer-contacts__detail">
      <span class="footer-contacts__desc">For all questions</span>
      <BaseLink 
        to="tel:+79202780068"   
        class="footer-contacts__phone"
        fontSize="s"
        lineHeightSize="s"
      >+7 (920) 278—00—68</BaseLink>
      <BaseLink 
        to="mailto:qtim@agency.com" 
        class="footer-contacts__mail"
        fontSize="s"
        lineHeightSize="s"
      >qtim@agency.com</BaseLink>
    </div>
    <div class="footer-contacts__detail">
      <span class="footer-contacts__desc">Office in Russia</span>
      <span class="footer-contacts__address">139 Ruben Station Lake Drew, NM 52678</span>
      <BaseLink 
        to="#" 
        variant="icon" 
        class="footer-contacts__network"
      >
        <IconNetwork />
      </BaseLink>
    </div>
    <div class="footer-contacts__detail">
      <span class="footer-contacts__desc">Office in Dubai</span>
      <span class="footer-contacts__address">139 Ruben Station Lake Drew, NM 52678</span>
      <BaseLink 
        to="#" 
        variant="icon" 
        class="footer-contacts__network"
      >
        <IconNetwork />
      </BaseLink>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.footer-contacts {
  max-width: 15.2rem;
 
  &__phone {
    margin-bottom: .4rem;
  }

  &__desc, 
  &__address, 
  &__phone,
  &__mail {
    @include f-size(s);
    @include line-height(s);
    letter-spacing: 0.02rem;
  }

  & > *:not(:last-child) {
    margin-bottom: 3.6rem;
  }

  &__detail {
    display: flex;
    flex-direction: column;
  }

  &__desc {
    margin-bottom: 1.2rem;
    @include f-size(s);
    @include line-height(s);
  }

  &__network {
    margin-top: .8rem;
  }
}
</style>
