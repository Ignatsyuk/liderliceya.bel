<template>
  <div class="contest-block">
    <div class="contest-block__info">
      <div class="contest-block__title heading-2">Две кепки <span>Make Lyceum Great Again</span></div>

      <div class="contest-block__description">
        Прямо сейчас в нашем Telegram-канале разыгрываются бесплатно. Условия элементарные: просто нажать кнопку «Участвовать»
        <br><br>
        Итоги: <b>28 сентября</b>
      </div>

      <Button is-primary class="contest-block__button" @click="onParticipateClick">Участвовать</Button>
    </div>

    <div class="contest-block__image">
      <Image src="./images/photos/cap.jpeg" class="contest-block__image-photo" />
      <div class="contest-block__image-background"></div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/ui/Button.vue'
import Image from '@/ui/Image.vue'

function onParticipateClick() {
  window.open('https://t.me/MakeLyceumGreat', '_blank')
}
</script>

<style scoped lang="sass">
.contest-block
  position: relative
  display: flex
  justify-content: space-between
  background-color: #f6f5f4
  border-radius: 0 12px 0 12px
  overflow: hidden
  border: 1px solid rgba(0, 0, 0, 0.05)
  box-shadow: rgba(255, 0, 0, 0.4) 5px 5px, rgba(255, 0, 0, 0.3) 10px 10px, rgba(255, 0, 0, 0.2) 15px 15px, rgba(255, 0, 0, 0.1) 20px 20px, rgba(255, 0, 0, 0.05) 25px 25px

  &__info
    display: flex
    flex-direction: column
    padding: 24px

  &__title
    font-size: 24px
    font-weight: 600
    margin-bottom: 24px

    span
      color: red
      font-weight: 700

  &__description
    font-size: 20px
    margin-bottom: 24px
    font-weight: 400
    height: 100%

    b
      font-weight: 600

  &__image
    display: flex

    &-photo
      max-height: 500px

    &-background
      background-color: #9211114a
      position: absolute
      width: 100%
      height: 100%

  @media screen and (max-width: $breakpointMobile)
    flex-direction: column

    &__image
      &-photo
        width: 100%
</style>