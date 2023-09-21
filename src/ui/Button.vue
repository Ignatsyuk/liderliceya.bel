<template>
  <button class="button" :class="buttonClasses">
    <Image v-if="props.icon" :src="props.icon" class="button__icon"></Image>

    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script setup>
import Image from '@/ui/Image.vue'

import { computed } from 'vue'

const props = defineProps({
  isPrimary: {
    type: Boolean,
    default: false
  },

  isSecondary: {
    type: Boolean,
    default: false
  },


  isSquare: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
  },
})

const buttonClasses = computed(() => {
  return {
    '--primary': props.isPrimary,
    '--secondary': props.isSecondary,
    '--square': props.isSquare,
  }
})
</script>

<style scoped lang="sass">
.button
  cursor: pointer
  padding: 12px 12px
  font-size: 18px
  white-space: nowrap
  font-weight: 600
  border-radius: 8px
  border: 1px solid transparent
  transition: background-color 0.3s ease, opacity 0.3s ease, color 0.3s ease
  background-color: transparent
  color: white

  &.--primary
    background-color: red
    font-size: 16px
    font-weight: 600

    &:hover
      background-color: #ff7e7e

  &.--secondary
    background-color: transparent
    border: 2px solid white
    color: white
    font-weight: 600

    &:hover
      background-color: white
      color: black

  &.--square
    padding: 6px

    svg,
    img
      max-height: 24px
      max-width: 24px
      width: 24px
      height: 24px

</style>