<template>
  <div class="page page-win">
    <div class="page-win__title heading-1 should-fade-in">Мы победили! 🎉</div>

    <TelegramPost link="https://t.me/MakeLyceumGreat/22" />

    <Button is-primary class="page-win__button" @click="router.push('/')">На главную</Button>
  </div>
</template>

<script setup>
import TelegramPost from '@/ui/TelegramPost.vue'
import Button from '@/ui/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped lang="sass">
.page-win
  display: flex
  flex-direction: column

  &__button
    max-width: 400px
    margin-top: 24px
</style>