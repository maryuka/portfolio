<script setup lang="ts">

const items = [
    {
        src: '/img/like1.webp',
    },
    {
        src: '/img/like2.webp',
    },
    {
        src: '/img/like3.webp',
    },
    {
        src: '/img/like4.webp',
    },
    {
        src: '/img/like5.webp',
    },
]

const { t,locale } = useI18n()
const title_txt = t(`About.title`)

</script>

<template>
    <v-sheet class="sheet" id="About">
        <v-container class="box py-16 my-16">
            <PartsTitle :title="title_txt" />
            <div v-motion :initial="{ opacity: 0, y: 20, }" :visibleOnce="{
                opacity: 1, y: 0, transition: {
                    duration: 1000, type: 'keyframes',
                    ease: 'easeOut', delay: 400,
                },
            }">
                <v-row no-gutters class="profile mt-16" justify="center">
                    <v-col class="txt_box" cols="12" lg="4">
                        <h1 v-text="$t(`About.profile.title`)"  style="white-space: pre-wrap;" class="profile_title is_en"></h1>
                        <p  v-text="$t(`About.profile.text`)"  style="white-space: pre-wrap;" class="txt mt-10"></p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="img_box mt-10  d-flex justify-center" cols="12" lg="6">
                        <img class="img mx-auto rounded-xl" src="/img/profile.webp">
                    </v-col>
                </v-row>
            </div>
            <div v-motion :initial="{ opacity: 0, y: 20, }" :visibleOnce="{
                opacity: 1, y: 0, transition: {
                    duration: 1000, type: 'keyframes',
                    ease: 'easeOut', delay: 400,
                },
            }">
                <v-row no-gutters class="profile is_reverse mt-16" justify="center">
                    <v-col class="txt_box" cols="12" lg="4">
                        <h1  v-text="$t(`About.likes.title`)"  style="white-space: pre-wrap;" class="profile_title is_en"></h1>
                        <p  v-text="$t(`About.likes.text`)" style="white-space: pre-wrap;" class="txt mt-10"></p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="img_box mt-10 d-flex justify-center" cols="12" lg="6">
                        <v-carousel cycle color="#ffffff" :show-arrows="false" :hide-delimiter-background="true"
                            :hide-delimiters="true">
                            <v-carousel-item v-for="(item, i) in items" aspect-ratio="1.5" :key="i" :src="item.src"
                                height="52vw" max-height="300" :draggable="false" cover></v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </v-sheet>
</template>

<style scoped>
.v-carousel {
    height: auto !important;
}

.v-carousel-item :deep(img) {
    border-radius: 24px;
}

.sheet {
    background-color: #E5EAF6;
    height: 100%;
}

.box {
    width: 960px;
}

.is_reverse {
    flex-direction: row-reverse;
}

.txt {
    line-height: 2;
}

.img {
    width: 450px;
    height: 300px;
}

@media screen and (max-width: 1280px) {
    .box {
        width: 700px;
    }

    .img {
        width: 700px;
        height: 466px;
    }
}

@media screen and (max-width: 960px) {
    .box {
        width: 80vw;
    }

    .img {
        width: 80vw;
        height: 52vw;
    }
}
</style>