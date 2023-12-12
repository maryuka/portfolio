<script setup lang="ts">
const props = defineProps<{
    title: string,
}>();
</script>

<template>
    <h1 class="title is_en">
        <PartsNemophilaIcon class="title_icon" />
        <div v-motion :initial="{ opacity: 0, x: -20, }" :visibleOnce="{
            opacity: 1, x: 0, transition: {
                duration: 600, type: 'keyframes',
                ease: 'easeOut', delay: 400,
            },
        }">
            {{ title }}
        </div>
    </h1>
</template>

<style scoped>
.title {
    display: flex;
}

.title_icon {
    margin-right: 16px;
}
</style>