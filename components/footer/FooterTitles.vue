<template>
  <div class="footer-titles">
    <span class="footer-titles__small">
      Is there a project?
    </span>
    <div class="footer-titles__big">
      <span>Let’s work</span>
      <span>together</span>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.footer-titles {
  display: flex;
  flex-direction: column;
  max-height: 29.9rem;
  max-width: 46.4rem;

  &__small {
    @include f-size(s);
    @include line-height(s);
    margin-bottom: 5.6rem;
    letter-spacing: 0.02rem;
  }

  &__big {
    display: flex;
    flex-direction: column;
    position: relative;
    @include f-size(xxxl);
    @include line-height(xxxl);

    & > :nth-child(1) {
      position: relative;
      
      &::after {
        content: "";
        position: absolute;
        bottom: 1.75rem;
        border-top: 0.15rem solid $color-dark;
        width: calc(100% - .8rem);
        left: 1rem;
      }
    }

    & > :nth-child(2) {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 7.7rem;
        bottom: 1.85rem;
        border-top: .15rem solid $color-dark;
      }

      &::after {
        content: "";
        position: absolute;
        right: 6.1rem;
        width: 21.3rem;
        bottom: 1.85rem;
        border-top: 0.15rem solid $color-dark;
      }
    }
  }
}
</style>