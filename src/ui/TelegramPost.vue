<template>
  <component
    is="script"
    src="https://telegram.org/js/telegram-widget.js?22"
    :data-telegram-post="link.replace('https://', '').replace('t.me', '')"
    data-width="40%"
    data-color="E22F38"
    data-dark-color="F95C54"
    async
  ></component>
</template>

<script setup>
defineProps({
  link: {
    type: String,
  },
})
</script>