<template>
  <BaseContentWrapper
    v-if="post"
    class="post"
    :title="post.title"  
  >
    <BaseImage 
      class="post__image"
      :src="post.image" 
      width="1216" 
      height="700" 
    />
    <div class="post__content">
      <span class="post__about">About</span>
      <p class="post__description">{{ post.description }}</p>
    </div>
  </BaseContentWrapper>
</template>
<script lang="ts" setup>
import type { Post } from "~/types/Post"
const route = useRoute()

const post = ref<Post | null>(null)


onMounted(async () => {
  const id = route.params.id as string 
  post.value = await usePostApi(id)

  useSeoMeta({
    title: post.value.title,
    description: post.value.description,
  })
})
</script>
<style lang="scss" scoped>
.post {
  margin-top: 12rem;
  margin-bottom: 8rem;

  &__content {
    margin-top: 8rem;
    max-width: 69.5rem;
  }

  &__about {
    @include f-size(s);
    @include line-height(xs);
  }

  &__description {
    margin-top: 3.2rem;
    @include f-size(xl);
    @include line-height(xl);
  }
}
</style>