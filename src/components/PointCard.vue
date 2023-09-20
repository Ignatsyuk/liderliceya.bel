<template>
  <div class="point-card">
    <div class="point-card__info">
      <div class="point-card__title">
        <slot name="title" />
      </div>

      <div class="point-card__description">
        <slot name="description" />
      </div>
    </div>

    <Image v-if="image" :src="image" class="point-card__image" />
  </div>
</template>

<script setup>
import Image from '@/ui/Image.vue'

defineProps({
  image: {
    type: String,
  }
})
</script>

<style scoped lang="sass">
.point-card
  position: relative
  display: flex
  flex-direction: column
  width: 100%
  background-color: #f6f5f4
  border-radius: 0 12px 12px 12px
  overflow: hidden
  border: 1px solid rgba(0, 0, 0, 0.05)
  box-shadow: rgba(255, 0, 0, 0.4) 5px 5px, rgba(255, 0, 0, 0.3) 10px 10px, rgba(255, 0, 0, 0.2) 15px 15px, rgba(255, 0, 0, 0.1) 20px 20px, rgba(255, 0, 0, 0.05) 25px 25px

  &__info
    padding: 32px 24px 0 24px
    height: 100%

  &__title
    font-size: 24px
    font-weight: 600
    margin-bottom: 24px

  &__description
    font-size: 20px
    margin-bottom: 24px
    font-weight: 400

  &__image
    min-height: 270px
    max-height: 270px
    object-fit: cover

  @media screen and (max-width: $breakpointMobile)
    &__image
      min-height: 256px
      max-height: 256px
</style>