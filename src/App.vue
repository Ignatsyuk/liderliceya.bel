<template>
  <AppModal v-if="layoutStore.isModalVisible" @closeModal="layoutStore.isModalVisible = false" />

  <main v-show="!layoutStore.isModalVisible" class="main" :class="{ '--hidden': layoutStore.isModalVisible }">
    <AppHeader class="main__header should-fade-in" />

    <div class="main__content container">
      <RouterView />
    </div>

    <AppFooter class="main__footer should-fade-in" />
  </main>
</template>

<script setup>
import AppHeader from '@/modules/AppHeader'
import AppFooter from '@/modules/AppFooter'
import AppModal from '@/modules/AppModal/AppModal.vue'

import { onMounted } from 'vue'
import { observeAnimations } from '@/utils/animations'
import { useLayoutStore } from '@/stores'

const layoutStore = useLayoutStore()

onMounted(() => {
  console.log('Developed with ♥ by Merik')

  window.onload = () => {
    observeAnimations('.should-fade-in', 'faded-in')
  }
})
</script>

<style scoped lang="sass">
.main
  margin: 0 auto
  overflow-x: hidden
  min-height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
  animation: fadeIn 1.5s ease
  transition: opacity 0.4s ease

  &.--hidden
    opacity: 0

  & > *
    width: 100%

  &__header
    margin-bottom: 12px

  &__content
    margin: 0 auto
</style>