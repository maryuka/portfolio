<script setup lang="ts">
import { ref } from "vue";
import type { Tag } from "~/components/lib";
</script>

<template>
  <v-sheet class="blog-sheet">
    <h2 class="mb-5 text-center mt-10 title">日常</h2>
    <v-sheet class="top-bg" />
    <v-container class="blog-box mx-auto">
      <slot />
    </v-container>
  </v-sheet>
</template>

<style scope>
.blog-sheet {
  height: 100%;
  position: relative;
  align-items: center;
}

.top-bg {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  background-color: #e5eaf6;
  width: 100%;
  height: 300px;
}

.title {
  font-size: 2rem;
  position: relative;
  z-index: 1;
}

.blog-box {
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  z-index: 1;
  width: 960px;
}

@media screen and (max-width: 1280px) {
  .blog-box {
    width: 700px;
  }
}

@media screen and (max-width: 960px) {
  .blog-box {
    width: auto;
  }
}
</style>
