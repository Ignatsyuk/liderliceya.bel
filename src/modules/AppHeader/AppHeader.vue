<template>
  <header class="header" id="header">
    <div class="header__inner container">
      <Image src="./images/logo.png" class="header__logo" />

<!--      <div class="header__description">-->
<!--        <Slogan />-->
<!--      </div>-->
    </div>
  </header>
</template>

<script setup>
import Image from '@/ui/Image.vue'

import { onMounted, ref } from 'vue'

const text = ref('Голосуй за Женька!')

onMounted(() => console.log(text.value.split('')))
</script>

<style lang="sass">
@keyframes anim-flipX
  0%
    opacity: 0
    transform: rotateX(90deg)

  50%
    opacity: 1
    transform: rotateX(720deg)

  100%
    opacity: 1
    transform: rotateX(720deg)

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
    //border-radius: 12px
    transition: opacity 0.3s ease

    &:hover
      opacity: 0.7

  &__description
    position: relative
    color: red
    font-weight: 700
    font-size: 18px

  &__tabs
    display: flex
    gap: 12px

    &-tab
      cursor: pointer
      transition: text-decoration 0.3s ease

      &:hover
        text-decoration: underline
</style>