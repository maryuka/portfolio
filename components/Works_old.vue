<script setup>
import { ref } from 'vue'
const model = ref(null)
const items = [
    { src: "/img/worksPortfolio.webp" },
    { src: "/img/worksbot.webp" },
    { src: "/img/worksgame.webp" },
]
const title_txt = "実績"
</script>

<template>
    <v-sheet class="works_sheet" id="Works">
        <v-container class="works_box pb-16 mb-16">
            <PartsTitle :title="title_txt" />
            <v-sheet class="mx-auto pt-16">
                <v-sheet class="works_pc">
                    <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" center-active show-arrows>
                        <v-slide-group-item v-for="(item, i) in items" :key="i"
                            v-slot="{ isSelected, toggle, selectedClass }">
                            <v-card :class="['ma-4', selectedClass]" height="200" width="300" @click="toggle">
                                <NuxtImg :src="item.src" class="d-flex fill-height align-center justify-center" />
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                    <v-expand-transition>
                        <v-sheet v-if="model != null" height="200" class="px-16">
                            <div v-if="model == 0">
                                <div>
                                    <h3>〈ポートフォリオサイト〉</h3>
                                    初めてVue,Nuxtを使って制作したサイトです。制作期間は約2週間です。<br><br>

                                    使用言語：Vue3<br>
                                    フレームワーク：Nuxt3<br>
                                    UIライブラリ：Vuetify<br>
                                    ホスティング：CloudflarePages<br>
                                    デザイン：Figma<br>
                                </div>
                            </div>
                            <div v-else-if="model == 1">
                                <div>
                                    <h3>〈Youtubeチャンネル登録者通知X(Twitter)Bot〉</h3>
                                    YouTubeのチャンネル登録者数を監視し、登録者数の増減があればTwitterでお知らせするBotです。<br><br>

                                    使用言語：Python<br>
                                    API：YouTube API v3、Twitter API v2<br>
                                    PaaS：Heroku<br>
                                    データベース管理：MySQL
                                </div>
                            </div>
                            <div v-else-if="model == 2">
                                <div>
                                    <h3>〈少人数マルチプレイゲーム〉</h3>
                                    所属する団体のイベントの中で使用するマルチプレイゲームの制作を行いました。<br><br>

                                    使用言語：JavaScript<br>
                                    ゲームエンジン：PlayCanvas<br>
                                    リアルタイム通信エンジン：Photon
                                </div>
                            </div>
                        </v-sheet>
                    </v-expand-transition>
                </v-sheet>
                <v-sheet class="works_mobile">
                    <v-row align="center" justify="center">
                        <v-col v-for="(item, i) in items" :key="i" cols="auto">

                            <v-card class="mx-auto" :image="item.src" v-bind="props">
                                <v-card-item>
                                    <NuxtImg :src="item.src" height="200" width="300"
                                        class="d-flex fill-height align-center justify-center" />
                                </v-card-item>
                            </v-card>


                        </v-col>
                    </v-row>
                </v-sheet>
            </v-sheet>
        </v-container>
    </v-sheet>
</template>

<style scoped>
.works_sheet {
    height: 100%;
}

.works_box {
    width: 960px;
}

.works_pc {
    display: block;
}

.works_mobile {
    display: none;
}

.v-card-item {
    padding: 0;
}

@media screen and (max-width: 1280px) {
    .works_box {
        width: 700px;
    }

    .works_pc {
        display: block;
    }

    .works_mobile {
        display: none;
    }
}

@media screen and (max-width: 960px) {
    .works_box {
        width: 80vw;
    }

    .works_pc {
        display: none;
    }

    .works_mobile {
        display: block;
    }

    .works_mobile img {
        width: 70vw;
    }
}
</style>
