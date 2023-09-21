<template>
  <AppModal v-if="layoutStore.isModalVisible" class="main" @closeModal="layoutStore.isModalVisible = false" />

  <main v-else class="main">
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
    // observeAnimations('.should-fade-in', 'faded-in')
    observeAnimations('.should-fade-in-left', 'faded-in-left')
  }
})
</script>

<style scoped lang="sass">
.main
  margin: 0 auto
  animation: fadeIn 1.5s ease
  overflow-x: hidden

  &__header
    margin-bottom: 12px

  &__content
    margin: 0 auto
</style>