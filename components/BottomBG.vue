<template>
    <v-parallax class="bottom-background-image" src="/img/bottom.webp"></v-parallax>
</template>

<style scoped>
.bottom-background-image {
    width: 100%;
    height: 300px;
}

.bottom-background-image :deep(img) {
    max-width: 80%;
}


@media screen and (max-width: 1280px) {
    .bottom-background-image {
        width: 100%;
        height: 30vw;
    }

    .bottom-background-image :deep(img) {
        max-width: 90%;
    }
}

@media screen and (max-width:960px) {
    .bottom-background-image :deep(img) {
        max-width: 80%;
    }
}
</style>