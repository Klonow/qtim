<template>
  <div class="base-content-wrapper">
    <h1 class="base-content-wrapper__title">{{ title }}</h1>
    <slot />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
  },
})

</script>
<style lang="scss">
.base-content-wrapper {
  &__title {
    margin-bottom: 5.9rem;
  }
}
</style>
