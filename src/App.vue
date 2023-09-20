<template>
  <main class="main">
    <AppHeader class="main__header" />

    <div class="main__content container">
      <RouterView />
    </div>

    <AppFooter class="main__footer" />
  </main>
</template>

<script setup>
import AppHeader from '@/modules/AppHeader'
import AppFooter from '@/modules/AppFooter'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Developed with ♥ by Merik')
})
</script>

<style scoped lang="sass">
.main
  margin: 0 auto

  &__header
    margin-bottom: 12px

  &__content
    margin: 0 auto
</style>