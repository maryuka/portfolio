<script setup lang="ts">
const title = ref("Yuka -engineer-");
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <v-app>
    <Topbar />
    <NuxtPage />
    <Footer />
  </v-app>
</template>
