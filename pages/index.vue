<template>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: [
    function (to) {
      if (to.path !== 'posts') {
        return navigateTo('posts')
      }
    }
  ]
})
</script>