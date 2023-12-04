<script setup>
import { ref } from 'vue'
const model = ref(null)
const items = [
    { src: "/img/worksPortfolio.webp" },
    { src: "/img/worksbot.webp" },
    { src: "/img/worksgame.webp" },
]

const { t,locale } = useI18n()
const title_txt = t(`Works.title`)

const dot_color = "#ffffff"

</script>

<template>
    <v-sheet class="works_sheet" id="Works">
        <v-container class="works_box pb-16 mb-16">
            <PartsTitle :title="title_txt" />
            <v-sheet class="mx-auto pt-16">
                <v-timeline align="start" side="end">
                    <v-timeline-item :dot-color="dot_color">
                        <template v-slot:opposite>
                            <p v-text="$t(`Works.item.portfolio.date`)"  style="white-space: pre-wrap;"  class="date"></p>
                        </template>
                        <div>
                            <div v-text="$t(`Works.item.portfolio.title`)"  style="white-space: pre-wrap;"  class="works_title"></div>
                            <p v-text="$t(`Works.item.portfolio.text`)"  style="white-space: pre-wrap;"  class="text"></p>
                            <v-container>
                                <v-row class="img_box">
                                    <v-col class="d-flex col" cols="12" lg="6">
                                        <img class="img mx-auto" src="/img/worksPortfolio.webp" alt="ポートフォリオサイトのスクリーンショット">
                                    </v-col>
                                    <v-col class="d-flex col" cols="12" lg="6">
                                        <img class="img mx-auto" src="/img/worksPortfolio.webp" alt="ポートフォリオサイトのスクリーンショット">
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-timeline-item>
                    <v-timeline-item :dot-color="dot_color">
                        <template v-slot:opposite>
                            <p v-text="$t(`Works.item.xbot.date`)"  style="white-space: pre-wrap;"  class="date"></p>
                        </template>
                        <div>
                            <div v-text="$t(`Works.item.xbot.title`)"  style="white-space: pre-wrap;"  class="works_title"></div>
                            <p v-text="$t(`Works.item.xbot.text`)"  style="white-space: pre-wrap;"  class="text"></p>
                            <v-container>
                                <v-row class="img_box">
                                    <v-col class="d-flex col" cols="12" lg="6">
                                        <img class="img mx-auto" src="/img/worksbot.webp" alt="ポートフォリオサイトのスクリーンショット">
                                    </v-col>
                                    <v-col class="d-flex col" cols="12" lg="6">
                                        <img class="img mx-auto" src="/img/worksbot.webp" alt="ポートフォリオサイトのスクリーンショット">
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-timeline-item>
                    <v-timeline-item :dot-color="dot_color">
                        <template v-slot:opposite>
                            <p v-text="$t(`Works.item.game.date`)"  style="white-space: pre-wrap;"  class="date"></p>
                        </template>
                        <div>
                            <div v-text="$t(`Works.item.game.title`)"  style="white-space: pre-wrap;"  class="works_title"></div>
                            <p v-text="$t(`Works.item.game.text`)"  style="white-space: pre-wrap;"  class="text"></p>
                            <v-container>
                                <v-row class="img_box">
                                    <v-col class="d-flex col" cols="12" lg="6">
                                        <img class="img mx-auto" src="/img/worksbot.webp" alt="ポートフォリオサイトのスクリーンショット">
                                    </v-col>
                                    <v-col class="d-flex col" cols="12" lg="6">
                                        <img class="img mx-auto" src="/img/worksbot.webp" alt="ポートフォリオサイトのスクリーンショット">
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-sheet>
        </v-container>
    </v-sheet>
</template>

<style scoped>
.works_sheet {
    height: 100%;
    position: relative;
    transform: translateZ(0);
    z-index: 4;
}

.works_box {
    width: 960px;
}

.date {
    color: #a9a9a9;
}

.works_title {
    font-size: 20px;
    font-weight: 600;
}

.img_box {
    margin-top: 10px;
}

.img {
    width: 300px;
    height: auto;
    border-radius: 15px;
}

@media screen and (max-width: 1280px) {
    .works_box {
        width: 700px;
    }
}

@media screen and (max-width: 960px) {
    .works_box {
        width: 80vw;
    }

    .text {
        font-size: 0.8rem;
    }

    .img {
        width: 50vw;
        height: auto;
        border-radius: 10px;
    }

    .date {
        font-size: 0.8rem;
    }
}
</style>
