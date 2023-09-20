<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__info">
        <Image src="./images/logo.png" class="footer__logo" @click="onLogoClick" />
        <div class="footer__title">© 2023, Make Lyceum Great Again!</div>
      </div>

      <div class="footer__socials">
        <div class="footer__socials-title">Соц. сети Женька -></div>
        <Socials />
      </div>
    </div>
  </footer>
</template>

<script setup>
import Image from '@/ui/Image.vue'

import { useRouter } from 'vue-router'
import Socials from '@/ui/Socials.vue'

const router = useRouter()

async function onLogoClick() {
  await router.push('#header')
  await router.push('/')
}
</script>

<style scoped lang="sass">
.footer
  border-top: 1px solid rgba(0, 0, 0, 0.1)
  margin-top: 84px

  &__inner
    display: flex
    justify-content: space-between
    margin: 0 auto
    padding: 24px

  &__info
    display: flex
    align-items: center
    gap: 16px

  &__title
    font-weight: 500
    opacity: 0.5
    font-size: 14px

  &__logo
    max-height: 44px
    filter: grayscale(1) opacity(0.5)
    transition: filter 0.5s ease, opacity 1s ease
    cursor: pointer

    &:hover
      filter: none

  &__socials
    display: flex
    align-items: center
    justify-content: space-between

    &-title
      display: none
      color: grey
      font-size: 14px
      margin-right: 12px

  @media screen and (max-width: $breakpointMobile)
    &__info
      width: 100%
      justify-content: space-between

    &__inner
      flex-direction: column-reverse
      gap: 24px

    &__socials
      border-bottom: 1px solid rgba(0, 0, 0, 0.1)
      padding-bottom: 24px

      &-title
        display: inline-block
</style>