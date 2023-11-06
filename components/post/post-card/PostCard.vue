<template>
  <article
    class="post-card"
    @click="navigateTo('/posts/' + post.id)"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="post-card__overlay">
    <BaseImage 
      class="post-card__image"
      :src="post.image"
    ></BaseImage>
    <div class="post-card__description-wrapper">
      <p class="post-card__description">{{ post.preview }}</p>
    </div>
    <Transition name="fade">
      <BaseLink 
        v-show="isHover"
        class="post-card__link"
        variant="secondary" 
        lineHeightSize="sm"
        fontSize="m"
      >Read more</BaseLink>
    </Transition>
  </div>
  </article>
</template>
<script setup lang="ts">
import type { Post } from "~/types/Post"

defineProps({
  post: Object as PropType<Post>,
})

const isHover = ref(false)

</script>
<style lang="scss" scoped>
.post-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 28rem;
  height: 41.4rem;

  &__overlay {
    transition: transform $transition-time-short ease-in-out;
    transform: translateY(0);
  }
  
  &:hover &__overlay {
    transform: translateY(-3.6rem);
  }

  &__image {
    display: block;
    width: 28rem;
    height: 28rem;
    margin-bottom: 2.4rem;
  }

  &__description {
    color: $color-dark;
    @include f-size(m);
    @include line-height(sm);
    @include truncate(3);
  }

  &__description-wrapper {
    padding-right: 1.6rem;
  }

  &__link {
    margin-top: 1.2rem;
  }
}

.fade-enter-active {
  transition: opacity $transition-time-short ease-out;
}

.fade-leave-active {
  transition: opacity $transition-time-short ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
