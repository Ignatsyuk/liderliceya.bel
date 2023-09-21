<template>
  <header class="header" id="header">
    <div class="header__inner container">
      <Image src="./images/logo.png" class="header__logo" />

      <div class="header__button" @click="onButtonClick">Поэма о Женькé -></div>
    </div>
  </header>
</template>

<script setup>
import Image from '@/ui/Image.vue'

import { useLayoutStore } from '@/stores'

const layoutStore = useLayoutStore()

function onButtonClick() {
  layoutStore.isModalVisible = true
}
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

  &__button
    //text-decoration: underline
    color: red
    cursor: pointer
    transition: opacity 0.3s ease

    &:hover
      opacity: 0.7
</style>