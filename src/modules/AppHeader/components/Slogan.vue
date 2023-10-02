<template>
  <div class="slogan">{{ text || '&zwnj;' }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const text = ref('')

onMounted(() => {
  const words = [
    'MAKE LYCEUM GREAT AGAIN!',
    'Сделаем лицей лучше!',
    'Спасибо за поддержку!',
    'Эх, щас бы сочника...',
    'Скачать ГДЗ 11 класс...',
  ]

  const length = words.length

  let i = 0
  let offset = 0
  let forwards = true
  let skipCount = 0
  let skipDelay = 40
  let speed = 50

  let result

  setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        skipCount += 1

        if (skipCount === skipDelay) {
          forwards = false
          skipCount = 0
        }
      }
    } else {
      if (offset === 0) {
        forwards = true
        i += 1
        offset = 0

        if (i >= length) {
          i = 0
        }
      }
    }

    result = words[i].substr(0, offset)

    if (skipCount === 0) {
      forwards ? offset++ : offset--
    }

    text.value = result
  }, speed)
})
</script>