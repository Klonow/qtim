<template>
  <NuxtImg
    v-bind="$attrs" 
    placeholder="/images/no-image.jpg"
    :src="src" 
    :style="{ 'object-fit': objectFit }" 
    :alt="alt"
    :key="src"
  />
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
  objectFit: {
    type: String,
    default: "cover",
  },
  alt: {
    type: String,
    default: "Image"
  }
})
</script>