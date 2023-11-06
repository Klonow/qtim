
<template>
  <div class="post-card-list">
    <PostCard 
      v-for="(post, index) in posts" 
      :post="post" 
      :key="index" 
    />
  </div>
</template>
<script setup lang="ts">
import type { Post } from "~/types/Post";

defineProps({
  posts: {
    type: Array as PropType<Post[]>,
  }
})
</script>
<style lang="scss" scoped>
.post-card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 28rem);
  grid-template-rows: repeat(auto-fill, 41.4rem);
  grid-gap: 2rem 3.2rem; 
}
</style>
