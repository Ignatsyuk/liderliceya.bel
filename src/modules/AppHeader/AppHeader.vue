<template>
  <header class="header" id="header">
    <div class="header__inner container">
      <Image src="./images/logo.png" class="header__logo" />
    </div>
  </header>
</template>

<script setup>
import Image from '@/ui/Image.vue'
</script>

<style lang="sass">
.header
  display: flex
  justify-content: center

  &__inner
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    height: 104px
    padding: 24px

  &__logo
    height: 100%
    cursor: pointer
    transition: opacity 0.3s ease

    &:hover
      opacity: 0.7
</style>