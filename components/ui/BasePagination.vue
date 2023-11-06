<template>
  <ul class="base-pagination">
    <li 
      class="base-pagination__item"
      v-for="page in totalPages"
      :key="page"
    >
      <BaseButton
        class="base-pagination__btn"
        borderRadius="s"
        :variant="(page - 1) === currentPage ? 'primary' : 'ashen'"
        @click="nextPage(page - 1)"
      >
        {{ page }}
      </BaseButton>
    </li>
    <li class="base-pagination__item">
      <BaseButton
        class="base-pagination__btn"
        @click="nextPage(currentPage + 1)"
        borderRadius="s"
        variant="clear"
        :isDisabled="currentPage === (totalPages - 1)"
      >
        <IconArrow />
      </BaseButton>
    </li>
  </ul>
</template>
<script lang="ts" setup>
const props = defineProps({
  totalPages: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits<{
  (e: 'changePage', page: number): void
}>()

const nextPage = (page: number) => {
  emit('changePage', page)
}
</script>
<style lang="scss" scoped>
.base-pagination {
  display: flex;
  margin-top: 2rem;

  & > *:not(:last-child) {
    margin-right: .8rem;
  }

  &__btn {
    width: 4.4rem;
    height: 4.4rem;
  }
}
</style>