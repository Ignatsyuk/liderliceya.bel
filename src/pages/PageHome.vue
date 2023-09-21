<template>
  <div class="page page-home">
    <div class="page-home__main should-fade-in">
      <div class="page-home__main-background"></div>
      <Slogan class="page-home__main-title" />
      <Button is-secondary class="page-home__main-button" @click="onProgramClick">К программе</Button>
    </div>

<!--    <div class="page-home__title heading-1 should-fade-in" id="program">Наши цели</div>-->
<!--    <div class="heading-2 should-fade-in"><span class="page-home__number">1</span> Сделать жизнь лицеистов лучше</div>-->
<!--    <div class="heading-2 should-fade-in"><span class="page-home__number">2</span> Получить как можно больше фана</div>-->
<!--    <div class="heading-2 should-fade-in"><span class="page-home__number">3</span> Запомнится в истории</div>-->

    <div class="page-home__title heading-1 should-fade-in" id="program">Наша программа</div>

    <div class="heading-2 should-fade-in"><span class="page-home__number">1</span> Забота о лицеистах</div>

    <div class="page-home__cards">
      <PointCard image="./gifs/board-games.gif">
        <template v-slot:title>Новая игровая комната</template>
        <template v-slot:description>Превратим спортивную комнату в общежитии в полноценную игровую зону с настольными играми и другими приколюхами.</template>
      </PointCard>

      <PointCard image="./gifs/water.webp">
        <template v-slot:title>Чистая вода всем!</template>
        <template v-slot:description>Установим кулер с водой на втором этаже лицея. Чтобы даже котик смог попить, когда нужно.</template>
      </PointCard>

      <PointCard image="./gifs/bench.webp">
        <template v-slot:title>Чтобы ножки не болели</template>
        <template v-slot:description>Добавим на территорию лицея дополнительные новые скамейки. Администрация уже одобрила!</template>
      </PointCard>

      <PointCard image="./gifs/kitchen.webp">
        <template v-slot:title>Ты – не ты, когда голоден</template>
        <template v-slot:description>Уговорим работников общежития и администрацию перенести закрытие кухни на 22:00.</template>
      </PointCard>
    </div>

    <div class="heading-2 should-fade-in"><span class="page-home__number">2</span> Новые мероприятия</div>

    <div class="page-home__cards">
      <PointCard image="./gifs/sport.webp">
        <template v-slot:title>Утренняя зарядка</template>
        <template v-slot:description>Согласуем время и будем укреплять здоровье вместе. Добровольно, конечно же!</template>
      </PointCard>

      <PointCard image="./gifs/movies.webp">
        <template v-slot:title>Киновечера в лицее</template>
        <template v-slot:description>Будем голосовать за лучшие фильмы и смотреть с удовольствием в актовом зале.</template>
      </PointCard>

      <PointCard image="./gifs/concert.gif">
        <template v-slot:title>Тематические концерты</template>
        <template v-slot:description>От Макса Коржа до Ивана Золо. Тему концерта будем выбирать заранее вместе.</template>
      </PointCard>

      <PointCard image="./gifs/telescope.webp">
        <template v-slot:title>Факультатив по астрономии</template>
        <template v-slot:description>Организуем просмотр звёздного неба через телескоп для всех желающих.</template>
      </PointCard>
    </div>

    <div class="heading-2 should-fade-in"><span class="page-home__number">3</span> Telegram-бот</div>

    <div class="page-home__cards">
      <PointCard image="./images/bot/1.jpg">
        <template v-slot:title>Оповещения</template>
        <template v-slot:description>Для лицеистов и учителей: о дежурстве, меню в столовой и ещё много о чём.</template>
      </PointCard>

      <PointCard image="./images/bot/2.jpeg">
        <template v-slot:title>Опросы</template>
        <template v-slot:description>Будем сообща выбирать идеи для улучшения жизни в лицее, а также решать, наприме, какой фильм сегодня будем смотреть.</template>
      </PointCard>

      <PointCard image="./images/bot/3.jpeg">
        <template v-slot:title>Приятности</template>
        <template v-slot:description>Бот будет поздравлять с праздниками, поднимать с утра настроение и делать жизнь лучше! </template>
      </PointCard>
    </div>

    <div class="heading-2 should-fade-in"><span class="page-home__number">4</span> А ещё...</div>

    <div class="page-home__cards">
      <PointCard image="./gifs/tiktok.webp">
        <template v-slot:title>TikTok-аккаунт</template>
        <template v-slot:description>Пообщались с администрацией о создании аккаунта лицея в Тиктоке. Идею одобрили – готовьтесь захватывать реки 😈</template>
      </PointCard>
    </div>

    <div class="page-home__title heading-1 should-fade-in" id="program">Конкурс</div>

    <ContestBlock class="should-fade-in-left" />
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
    background-image: url('./images/photos/trump.png')
    background-size: 100%
    background-position: 100% 10%

    &-background
      background-color: red
      position: absolute
      width: 100%
      height: 100%
      opacity: 0.4

    &-title
      font-size: 54px
      font-weight: 900
      text-shadow: 0px 3px 0 black
      z-index: 1

    &-button
      margin-top: 36px
      z-index: 1

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
      background-size: 100% auto
      background-position: center top
      background-image: url('./images/photos/trump-mobile.png')

      &-title
        min-height: 140px
        font-size: 44px

      &-button
        margin-top: 12px

    &__cards
      grid-template-columns: 1fr
</style>