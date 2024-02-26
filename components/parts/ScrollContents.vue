<script setup lang="ts">
import { ref, onMounted } from "vue";

const text = "SCROLL DOWN・SCROLL DOWN・";
const circled_text = ref("");
const circle = ref(null);
const inner = ref(null);

const text2circle = () => {
  const text_array = text.split("");
  const text_content = text_array.length;
  const circle_R = circle.value.clientHeight / 2;
  const font_hight = inner.value.clientHeight;
  const distance = circle_R - font_hight;
  const num = ref(0);
  const radX = ref(0);
  const radY = ref(0);

  for (let i = 0; i < text_array.length; i++) {
    num.value = i + 1;
    radX.value = Math.sin((360 / text_content) * num.value * (Math.PI / 180));
    radY.value = Math.sin(
      (90 - (360 / text_content) * num.value) * (Math.PI / 180)
    );
    circled_text.value +=
      '<span style="color:white;position: absolute; inset: 0; transform:translate(' +
      distance * radX.value +
      "px, " +
      -(distance * radY.value) +
      "px) rotate(" +
      (360 / text_content) * num.value +
      'deg)">' +
      text_array[i] +
      "</span>";
  }
};

onMounted(() => {
  text2circle();
});
</script>

<template>
  <div ref="circle" class="circle">
    <div
      ref="inner"
      class="inner"
      v-motion
      :initial="{ rotate: 0 }"
      :enter="{
        rotate: 360,
        transition: {
          duration: 10000,
          repeat: Infinity,
          repeatType: 'loop',
          type: 'keyframes',
          ease: 'linear',
        },
      }"
    >
      <p v-html="circled_text"></p>
    </div>
    <div
      class="dot"
      v-motion
      :initial="{ opacity: 0.8, y: -20 }"
      :enter="{
        opacity: 0,
        y: 30,
        transition: {
          opacity: {
            duration: 1500,
            repeatDelay: 100,
            repeat: Infinity,
            repeatType: 'loop',
            type: 'keyframes',
            ease: 'easeOut',
          },
          y: {
            duration: 1000,
            repeatDelay: 600,
            repeat: Infinity,
            repeatType: 'loop',
            type: 'keyframes',
            ease: 'easeOut',
          },
        },
      }"
    />
    <div
      class="dot"
      v-motion
      :initial="{ opacity: 0.8, y: -20 }"
      :enter="{
        opacity: 0,
        y: 30,
        transition: {
          opacity: {
            delay: 100,
            duration: 1500,
            repeatDelay: 100,
            repeat: Infinity,
            repeatType: 'loop',
            type: 'keyframes',
            ease: 'easeOut',
          },
          y: {
            delay: 100,
            duration: 1000,
            repeatDelay: 600,
            repeat: Infinity,
            repeatType: 'loop',
            type: 'keyframes',
            ease: 'easeOut',
          },
        },
      }"
    />
    <div
      class="dot"
      v-motion
      :initial="{ opacity: 0.8, y: -20 }"
      :enter="{
        opacity: 0,
        y: 30,
        transition: {
          opacity: {
            delay: 250,
            duration: 1500,
            repeatDelay: 100,
            repeat: Infinity,
            repeatType: 'loop',
            type: 'keyframes',
            ease: 'easeOut',
          },
          y: {
            delay: 250,
            duration: 1000,
            repeatDelay: 600,
            repeat: Infinity,
            repeatType: 'loop',
            type: 'keyframes',
            ease: 'easeOut',
          },
        },
      }"
    />
    <div
      class="dot"
      v-motion
      :initial="{ opacity: 0.8, y: -20 }"
      :enter="{
        opacity: 0,
        y: 30,
        transition: {
          opacity: {
            delay: 400,
            duration: 1500,
            repeatDelay: 100,
            repeat: Infinity,
            repeatType: 'loop',
            type: 'keyframes',
            ease: 'easeOut',
          },
          y: {
            delay: 400,
            duration: 1000,
            repeatDelay: 600,
            repeat: Infinity,
            repeatType: 'loop',
            type: 'keyframes',
            ease: 'easeOut',
          },
        },
      }"
    />
  </div>
</template>

<style scoped>
.dot {
  display: block;
  width: 5px;
  height: 5px;
  background: #ffffff;
  border-radius: 4px;
  position: absolute;
}

.circle {
  position: relative;
  margin: 20px auto;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.inner {
  /* 文字を配置する起点となる親要素 */
  position: relative;
  width: 20px;
  /* この親要素自体は1文字が収まる程度の小さいサイズ */
  height: 20px;
  border-radius: 50%;
  animation: rotateAnim 7s linear infinite;
  /* 円形テキストを回転 */
}

@media screen and (max-width: 960px) {
  .circle {
    width: 20vw;
    height: 20vw;
  }

  .inner {
    font-size: 1.8vw;
  }
}
</style>
