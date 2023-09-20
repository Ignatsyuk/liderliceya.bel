<template>
  <div class="page page-home">
    <div class="page-home__main">
      <Slogan class="page-home__main-title" />
      <Button is-secondary class="page-home__main-button" @click="onProgramClick">К программе</Button>
    </div>

    <div class="page-home__title heading-1" id="program">Наша программа</div>

    <div class="heading-2"><span class="page-home__number">1</span> Для лучшей жизни</div>

    <div class="page-home__cards">
      <PointCard image="./gifs/board-games.gif">
        <template v-slot:title>Новая игровая комната</template>
        <template v-slot:description>Из спортивной комнаты в общежитии, в которой лишь один теннисный стол, в планах сделать полноценную игровую зону с настольными играми и другими приколами.</template>
      </PointCard>

      <PointCard image="./gifs/water.webp">
        <template v-slot:title>Чистая вода всем!</template>
        <template v-slot:description>Человек состоит на ~75% из воды, а в столовой многие даже и не видели. Планируется установить кулер с водой на втором этаже.</template>
      </PointCard>

      <PointCard image="./gifs/kitchen.webp">
        <template v-slot:title>Невозможное возможно</template>
        <template v-slot:description>Идет попытка убедить работников общежития и администрацию перенести закрытие кухни на 22:00.</template>
      </PointCard>
    </div>

    <div class="heading-2"><span class="page-home__number">2</span> Новые мероприятия</div>

    <div class="page-home__cards">
      <PointCard image="./gifs/sport.webp">
        <template v-slot:title>Утренняя зарядка</template>
        <template v-slot:description>Будет согласован вопрос о проведении добровольной утренней зарядки.</template>
      </PointCard>

      <PointCard image="./gifs/movies.webp">
        <template v-slot:title>Киновечера в лицее</template>
        <template v-slot:description>Фильмы будем выбирать голосованием и смотреть с удовольствием в актовом зале лицея.</template>
      </PointCard>

      <PointCard image="./gifs/concert.gif">
        <template v-slot:title>Тематические концерты</template>
        <template v-slot:description>Будем петь песни Кишлака или Макса Коржа. Тему концерта будем выбирать заранее!</template>
      </PointCard>
    </div>

    <div class="heading-2"><span class="page-home__number">3</span> Telegram-бот</div>

    <div class="page-home__cards">
      <PointCard image="./images/bot/1.jpg">
        <template v-slot:title>Оповещения</template>
        <template v-slot:description>Для лицеистов и учителей: о дежурстве, меню в столовой и ещё много о чём.</template>
      </PointCard>

      <PointCard image="./images/bot/2.jpeg">
        <template v-slot:title>Опросы</template>
        <template v-slot:description>Будем сообща выбирать идеи для улучшения жизни в лицее, а также, например, решать, какой фильм сегодня будем смотреть.</template>
      </PointCard>

      <PointCard image="./images/bot/3.jpeg">
        <template v-slot:title>Приятности</template>
        <template v-slot:description>Бот будет поздравлять с праздниками, поднимать с утра настроение и делать жизнь лучше!</template>
      </PointCard>
    </div>

    <div class="page-home__title heading-1" id="program">Конкурс</div>

    <ContestBlock />
  </div>
</template>

<script setup>
import PointCard from '@/components/PointCard.vue'
import Slogan from '@/modules/AppHeader/components/Slogan.vue'
import Button from '@/ui/Button.vue'
import ContestBlock from '@/components/ContestBlock.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

async function onProgramClick() {
  await router.push('/#program')
  await router.push('/')
}
</script>

<style scoped lang="sass">
.page-home
  &__title
    padding-top: 24px

  &__number
    display: inline-flex
    justify-content: center
    align-items: center
    border: 1px solid black
    height: 32px
    width: 32px
    border-radius: 50%
    color: red
    margin-right: 2px
    font-size: 26px

  &__main
    width: 100%
    height: 400px
    background-color: red
    margin-bottom: 54px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    color: white
    text-align: center
    padding: 24px
    border-radius: 0 12px 0 12px

    &-title
      font-size: 54px
      font-weight: 900
      text-shadow: 2px 2px 0 black

    &-button
      margin-top: 36px

  &__cards
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 40px 32px
    margin-bottom: 64px

  @media screen and (max-width: $breakpointTablet)
    &__cards
      grid-template-columns: 1fr 1fr

  @media screen and (max-width: $breakpointMobile)
    &__main
      height: 64vh
      margin-bottom: 30px

      &-title
        min-height: 130px
        font-size: 44px

      &-button
        margin-top: 12px

    &__cards
      grid-template-columns: 1fr
</style>