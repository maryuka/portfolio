<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Post, Tag } from "~/components/lib";

const posts = ref<Post[]>([]);

const selectedTag = ref<string>("");
const allTags = ref<Tag[]>([]);

onMounted(async () => {
  const resPost = await $fetch<Post[]>("/api/articles");
  posts.value = resPost;

  const resTags = await $fetch<Tag[]>("/api/tag");
  allTags.value = resTags;
});
</script>

<template>
  <v-row class="mb-2 blog-chips">
    <v-col cols="12">
      <v-chip-group
        v-model="selectedTag"
        column
        selected-class="selected-chip"
        class="d-flex justify-center"
      >
        <v-chip
          v-for="tag in allTags"
          :key="tag.slug"
          :value="tag.slug"
          class="ma-2 font-weight-bold chip"
        >
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
  <v-row>
    <v-col
      v-for="post in posts"
      :key="post.id"
      cols="12"
      md="6"
      lg="4"
      class="post-item d-flex justify-center"
    >
      <NuxtLink :to="`/blog/${post.slug}`" class="post-link">
        <div class="post-image">
          <span class="post-image-text">
            {{ post.emoji }} {{ post.titleOfImage }}
          </span>
        </div>
        <h3 class="post-title mt-2 pr-1">{{ post.title }}</h3>
        <p class="post-body">
          {{
            post.body.replace(/<\/?[^>]+(>|$)/g, "").length > 70
              ? post.body.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 70) +
                "..."
              : post.body.replace(/<\/?[^>]+(>|$)/g, "")
          }}
        </p>
        <span class="post-date mr-2">
          {{ new Date(post.createdAt).toLocaleDateString() }}
        </span>
        <span class="post-tags">
          <span v-for="tag in post.tags" :key="tag.slug" class="ma-1 post-tag">
            {{ tag.name }}
          </span>
        </span>
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<style scoped>
.blog-chips {
  position: relative;
  z-index: 1;
}

.chip {
  font-size: 0.9rem;
  user-select: none;
}

.selected-chip {
  background-color: #8aa7eb; /* Change to your desired color */
  color: white;
}

.post-image {
  width: 280px;
  height: 130px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-image: url("/img/blog-img-bg.png");
  background-size: cover;
  background-position: center;
  position: relative;
}

.post-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;
}

.post-item:hover .post-image::after {
  opacity: 0.5;
}

@media screen and (max-width: 960px) {
  .post-image {
    width: 80vw;
  }
}

.post-link {
  text-decoration: none;
  color: inherit;
}

.post-image:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

.post-image:hover .post-image-text {
  cursor: pointer;
}

.post-image-text {
  font-size: 20px;
  user-select: none;
  cursor: default;
  font-family: "Noto Sans JP", sans-serif;
  letter-spacing: -0.2px;
  text-decoration: none;
}

.post-body {
  font-size: 14px;
  margin-top: 10px;
  width: 280px;
  opacity: 0.8;
}

.post-date {
  font-size: 12px;
  margin-top: 10px;
  opacity: 0.6;
}

.post-tags {
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.6;
  font-weight: bold;
  letter-spacing: -0.2px;
  text-decoration: none;
}
</style>
