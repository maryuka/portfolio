<template>
    <v-parallax class="bottom-background-image" src="/img/bottom.webp" scale="0.6"></v-parallax>
</template>

<style  scoped>
.bottom-background-image {
    width: 100%;
    height: 300px;
}

.bottom-background-image :deep(img) {
    min-width: 80%;
}

@media screen and (max-width: 1280px) {
    .bottom-background-image {
        width: 100%;
        height: 30vw;
    }
}
</style>