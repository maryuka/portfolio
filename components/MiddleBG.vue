<template>
    <v-parallax class="middle-background-image" src="/img/middle.webp"></v-parallax>
</template>

<style  scoped>
.middle-background-image {
    width: 100%;
    height: 300px;
}

.middle-background-image :deep(img) {
    max-width: 80%;
}


@media screen and (max-width: 1280px) {
    .middle-background-image {
        width: 100%;
        height: 30vw;
    }

    .middle-background-image :deep(img) {
        max-width: 90%;
    }
}

@media screen and (max-width:960px) {
    .middle-background-image :deep(img) {
        max-width: 80%;
    }
}
</style>