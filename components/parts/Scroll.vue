<script setup lang="ts">
import { ref, onMounted } from 'vue'

const scroll_target = ref(null)
const { apply } = useMotion(scroll_target, {
  initial: {
    opacity: 0.8,
    transition: {
      duration: 400, type: 'keyframes',
      ease: 'easeOut',
    }
  },
  leave: {
    opacity: 0,
    transition: {
      duration: 400, type: 'keyframes',
      ease: 'easeOut',
    }
  },
})

const scrolly = ref(0)

const showScrollallow = async () => {
  scrolly.value = window.scrollY;

  if (-10<scrolly.value && scrolly.value  < 10) {
    await apply('initial')
  } else {
    await apply('leave')
  }
}

onMounted(() => {
  window.addEventListener('scroll', showScrollallow)
})

</script>

<template>
  <div ref="scroll_target">
    <PartsScrollContents />
  </div>
</template>