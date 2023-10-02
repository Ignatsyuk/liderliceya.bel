<template>
  <div class="page page-program">
    <div class="heading-1 should-fade-in" id="program">Наша программа</div>

    <div class="heading-2 should-fade-in"><span class="number-circle">1</span> Забота о лицеистах</div>

    <div class="card-list">
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

    <div class="heading-2 should-fade-in"><span class="number-circle">2</span> Новые мероприятия</div>

    <div class="card-list">
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

    <div class="heading-2 should-fade-in"><span class="number-circle">3</span> Telegram-бот</div>

    <div class="card-list">
      <PointCard image="./images/bot/1.jpg">
        <template v-slot:title>Оповещения</template>
        <template v-slot:description>Для лицеистов и учителей: о дежурстве, меню в столовой и ещё много о чём.</template>
      </PointCard>

      <PointCard image="./images/bot/2.jpeg">
        <template v-slot:title>Опросы</template>
        <template v-slot:description>Будем сообща выбирать идеи для улучшения жизни в лицее, а также решать, например, какой фильм сегодня будем смотреть.</template>
      </PointCard>

      <PointCard image="./images/bot/3.jpeg">
        <template v-slot:title>Приятности</template>
        <template v-slot:description>Бот будет поздравлять с праздниками, поднимать с утра настроение и делать жизнь лучше! </template>
      </PointCard>
    </div>

    <div class="heading-2 should-fade-in"><span class="number-circle">4</span> А ещё...</div>

    <div class="card-list">
      <PointCard image="./gifs/tiktok.webp">
        <template v-slot:title>TikTok-аккаунт</template>
        <template v-slot:description>Пообщались с администрацией о создании аккаунта лицея в Тиктоке. Идею одобрили – готовьтесь захватывать реки 😈</template>
      </PointCard>
    </div>
  </div>
</template>

<script setup>
import PointCard from '@/components/PointCard.vue'
</script>