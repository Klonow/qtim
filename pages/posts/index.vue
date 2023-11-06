<template>
  <BaseContentWrapper 
    class="posts"
    title="Articles"
  >
    <PostCardList 
      :posts="getCurrentPagePosts" 
    />
    <BasePagination
      v-if="!isLoading"
      class="posts__pagination"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @changePage="pageChangeHandle"
    />
  </BaseContentWrapper>
</template>
<script lang="ts" setup>
import type { Post } from '~/types/Post';

useSeoMeta({
  title: 'Posts',
  description: 'Here you can find all posts that we have',
})

const router = useRouter()
const route = useRoute()
const totalPages = ref(0)
const allPosts = ref<Post[]>([])
const postsForPerPage: Ref<Post[][]> = ref([])
const postsPerPageCount = 12;
const isLoading = ref(true)

const currentPage = computed(() => {
  return route.query.page && Number(route.query.page)
})

const getCurrentPagePosts = computed(() => {
  return postsForPerPage.value[currentPage.value || 0]
})

const pageChangeHandle = (page: number) => {
  setPage(page)
}

const setPage = (page: number) => {
  router.push({ 
    query: { page }
  })
}

onMounted(async () => {
  allPosts.value = await usePostsApi()
  isLoading.value = false
  
  totalPages.value = Math.ceil(allPosts.value.length / postsPerPageCount)
  
  for (let i = 0; i < totalPages.value; i++) {
    postsForPerPage.value.push(
      allPosts.value.slice(
        (i * postsPerPageCount), 
        (i * postsPerPageCount) + postsPerPageCount
      )
    )
  }

  if (!currentPage.value) {
    setPage(0)
  }
})
</script>
<style lang="scss" scoped>
.posts {
  margin-top: 12rem;
  margin-bottom: 14rem;
  
  &__pagination {
    margin-top: 5rem;
  }
}
</style>
