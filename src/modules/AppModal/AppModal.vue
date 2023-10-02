<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__text">
        Однажды в сплочённой лицейской семье<br>
        Народ захотел инноваций,<br>
        Зажёгся идеей устроить себе<br>
        встречи, зарядки и праздник.
        <br><br>
        Тут вышел на сцену простой паренёк,<br>
        Ему не сиделось на месте.<br>
        Это был добрый, обычный Женёк,<br>
        Мечтал он лицейскую жизнь<br>
        лучше сделать всем вместе.
        <br>
        <br>
        <span>Захаревич Миша</span>
      </div>

      <Button is-primary class="modal__button" @click="emit('closeModal')">Вернуться</Button>
    </div>
  </div>
</template>

<script setup>
import Button from '@/ui/Button.vue'

const emit = defineEmits(['closeModal'])
</script>

<style scoped lang="sass">
.modal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: white
  display: flex
  justify-content: center
  align-items: center
  animation: fadeIn 1.5s ease

  &__content
    padding: 12px

  &__text
    font-style: italic

    span
      font-style: normal
      font-weight: 600

  &__button
    margin-top: 24px
    width: 100%

</style>