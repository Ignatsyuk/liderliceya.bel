<template>
  <div class="socials">
    <a href="https://t.me/MakeLyceumGreat" target="_blank" class="socials__social">
      <Image src="./images/icons/telegram.svg" />
    </a>

    <a href="https://instagram.com/krutm_" target="_blank" class="socials__social">
      <Image src="./images/icons/instagram.svg" />
    </a>
  </div>
</template>

<script setup>
import Image from '@/ui/Image.vue'
</script>

<style scoped lang="sass">
.socials
  display: flex
  align-items: center
  gap: 18px

  &__social
    height: 24px
    width: 24px
    color: grey
    cursor: pointer
    transition: color 0.3s ease

    &:hover
      color: red
</style>