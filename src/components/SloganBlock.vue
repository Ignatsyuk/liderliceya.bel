<template>
  <div class="slogan-block should-fade-in">
    <div class="slogan-block__background"></div>
    <Slogan class="slogan-block__title" />
    <Button is-secondary class="slogan-block__button" @click="onProgramClick">Смотреть программу</Button>
  </div>
</template>

<script setup>
import Button from '@/ui/Button.vue'
import Slogan from '@/modules/AppHeader/components/Slogan.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

async function onProgramClick() {
  await router.push('/program')
}
</script>

<style scoped lang="sass">
.slogan-block
  position: relative
  overflow: hidden
  width: 100%
  height: 400px
  margin-bottom: 54px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  color: white
  text-align: center
  padding: 24px 16px
  border-radius: 0 12px 0 12px
  //background-image: url('/images/photos/trump.png')
  background-size: 100%
  background-position: 100% 10%

  &__background
    background-color: red
    position: absolute
    width: 100%
    height: 100%
    //opacity: 0.4

  &__title
    font-size: 54px
    font-weight: 900
    text-shadow: 0px 3px 0 black
    z-index: 1

  &__button
    margin-top: 36px
    z-index: 1

  @media screen and (max-width: $breakpointMobile)
    height: 64vh
    margin-bottom: 30px
    background-size: 100% auto
    background-position: center top
    //background-image: url('/images/photos/trump-mobile.png')

    &__title
      min-height: 150px
      font-size: 40px

    &__button
      margin-top: 12px
</style>