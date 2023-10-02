<template>
  <div class="page page-home">
    <SloganBlock class="should-fade-in-left" />

    <div class="heading-1 should-fade-in">Мы победили! 🎉</div>
    <TelegramPost link="https://t.me/MakeLyceumGreat/22" />

    <div class="page-home__title heading-1 should-fade-in" id="program">Розыгрыш</div>
    <ContestBlock class="should-fade-in-left" />
  </div>
</template>

<script setup>
import ContestBlock from '@/components/ContestBlock.vue'
import TelegramPost from '@/ui/TelegramPost.vue'
import SloganBlock from '@/components/SloganBlock.vue'
</script>

<style scoped lang="sass">
.page-home
  &__title
    padding-top: 24px
</style>