<script setup lang="ts">
import type { Post } from "~/components/lib";

const route = useRoute();
const post = ref<Post>();

console.log(route.params.slug);

onMounted(async () => {
  const resPost = await $fetch<Post[]>("/api/article/" + route.params.slug);
  post.value = resPost[0];
});
</script>

<template>
  <div v-if="post">
    <h1 class="mb-3">{{ post?.emoji }} {{ post?.title }}</h1>
    <p class="post-date mb-5">
      {{ new Date(post?.createdAt ?? "").toLocaleDateString() }}
    </p>
    <div v-html="post?.body" class="post-body" />
  </div>
</template>

<style scoped>
.post-date {
  font-size: 0.8rem;
  color: #666;
}

.post-body {
  line-height: 2;
}
</style>
