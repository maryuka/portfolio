<script setup lang="ts">
import { ref } from 'vue'
const sleep = async (ms: number) => new Promise((res) => setTimeout(res, ms));

const title_txt = "できること";
const readMore = ref({ Activated: false, Inactivated: true });

const readMoreInactivatedFunc = async () => {
    readMore.value.Inactivated = !readMore.value.Inactivated;
    await sleep(400);
    readMore.value.Activated = !readMore.value.Activated;
}

</script>

<template>
    <v-sheet class="sheet" id="Skills">
        <v-container class="box py-16 my-16">
            <div v-motion :initial="{ opacity: 0, y: 20, }" :visibleOnce="{
                opacity: 1, y: 0, transition: {
                    duration: 1000, type: 'keyframes',
                    ease: 'easeOut', delay: 400,
                },
            }">
            <PartsTitle :title="title_txt" />
            <v-container class="px-0">
                <v-row justify="center">
                    <v-col cols="auto" >
                        <v-card class="mx-auto my-2 card" elevation="3">
                            <v-card-item>
                                <v-card-title class="title">
                                    Wordpress
                                </v-card-title>
                                <v-card-subtitle>
                                    4年
                                </v-card-subtitle>
                            </v-card-item>
                            <v-card-text>
                                自社のホームページ(ブログ機能付き)をWordPressのテーマ「Diver」を用いて制作しました。サーバー設置やドメイン取得、GoogleAnalytics連携、プラグインのカスタマイズなども行いました。WordPressでのサイト構築は一通りできます。
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="auto" >
                        <v-card class="mx-auto my-2 card" elevation="3">
                            <v-card-item>
                                <v-card-title class="title">
                                    HTML / CSS
                                </v-card-title>
                                <v-card-subtitle>
                                    3年
                                </v-card-subtitle>
                            </v-card-item>
                            <v-card-text>
                                自社のホームページリニューアルや新規サイト制作、このポートフォリオサイトの制作で使用しました。基本的な書き方は理解しています。ただ、保守性や拡張性、再利用性など考えることはたくさんあり、CSS設計は奥が深いなぁと思う今日このごろです。
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="auto" >
                        <v-card class="mx-auto my-2 card" elevation="3">
                            <v-card-item>
                                <v-card-title class="title">
                                    Vue3 / Nuxt3
                                </v-card-title>
                                <v-card-subtitle>
                                    1ヶ月
                                </v-card-subtitle>
                            </v-card-item>
                            <v-card-text>
                                このポートフォリオサイトを制作時に初めて触れました。コンポーネント指向の書き方にも少し慣れてきました。これから更に知識を深めていきたいです。
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <Transition name="moreButton">
                    <v-btn class="button" v-if="!readMore.Activated"
                        @click="readMore.Activated = !readMore.Activated; readMore.Inactivated = !readMore.Inactivated">
                        もっと見る
                    </v-btn>
                </Transition>
                <Transition name=" skillMore">
                    <div v-if="!readMore.Inactivated">
                        <v-row justify="center">
                            <v-col cols="auto" >
                                <v-card class="mx-auto my-2 card" elevation="3">
                                    <v-card-item>
                                        <v-card-title class="title">
                                            PHP
                                        </v-card-title>
                                        <v-card-subtitle>
                                            1年
                                        </v-card-subtitle>
                                    </v-card-item>

                                    <v-card-text>
                                        PHPを使ってWordPressで構築した自社ホームページにてメンバー一覧のページを作成しました。WordPressのプラグインを併用しつつ、データベースから登録されているユーザ情報を取り出し、一覧で表示する機能を追加しました。正直よく分からずに作っていたのでいつかきちんと勉強し直したいです。
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="auto" >
                                <v-card class="mx-auto my-2 card" elevation="3">
                                    <v-card-item>
                                        <v-card-title class="title">
                                            TypeScript / JavaScript
                                        </v-card-title>
                                        <v-card-subtitle>
                                            半年
                                        </v-card-subtitle>
                                    </v-card-item>

                                    <v-card-text>
                                        TypeScriptはこのポートフォリオサイトを制作時に初めてしっかり触れました。JavaScriptはリアルタイム通信ゲームを自作したときに少し使ったことがあります。
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="auto" >
                                <v-card class="mx-auto my-2 card" elevation="3">
                                    <v-card-item>
                                        <v-card-title class="title">
                                            Python
                                        </v-card-title>
                                        <v-card-subtitle>
                                            2年
                                        </v-card-subtitle>
                                    </v-card-item>

                                    <v-card-text>
                                        X(Twitter)のBotをPythonでコーディングして制作しました。Twitter、YouTubeのAPIや、画像処理ライブラリのPillowを使用しました。
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="auto" >
                                <v-card class="mx-auto my-2 card" elevation="3">
                                    <v-card-item>
                                        <v-card-title class="title">
                                            SQL / MySQL
                                        </v-card-title>
                                        <v-card-subtitle>
                                            2年
                                        </v-card-subtitle>
                                    </v-card-item>

                                    <v-card-text>
                                        X(Twitter)のBotでデータを扱う際にMySQLを使用しました。
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="auto" >
                                <v-card class="mx-auto my-2 card" elevation="3">
                                    <v-card-item>
                                        <v-card-title class="title">
                                            PremierePro / AfterEffect
                                        </v-card-title>
                                        <v-card-subtitle>
                                            4年
                                        </v-card-subtitle>
                                    </v-card-item>

                                    <v-card-text>
                                        子ども向けイベントで使用する動画をいくつか制作しました。最近はYouTubeにあげる切り抜き動画を作っています。
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="auto" >
                                <v-card class="mx-auto my-2 card" elevation="3">
                                    <v-card-item>
                                        <v-card-title class="title">
                                            Illustrator / Photoshop
                                        </v-card-title>
                                        <v-card-subtitle>
                                            3年
                                        </v-card-subtitle>
                                    </v-card-item>

                                    <v-card-text>
                                        ホームページのバナー作成や写真のレタッチで使用しています。
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-btn class="button" @click="readMoreInactivatedFunc">閉じる</v-btn>
                    </div>
                </Transition>
            </v-container>
            </div>
        </v-container>
    </v-sheet>
</template>

<style scoped>
.sheet {
    height: 100%;
}

.box {
    width: 960px;
}

.title {
    white-space: normal;
}

.card {
    max-width: 275px;
    min-height: 280px;
}

.button {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
}

.skillMore-enter-active {
    transition: opacity 0.4s ease;
}

.skillMore-leave-active {
    transition: opacity 0.4s ease;
}

.moreButton-enter-active {
    transition: opacity 0.4s ease;
}

.moreButton-leave-active {
    transition: 0s;
}


.skillMore-enter-from,
.skillMore-leave-to,
.moreButton-enter-from,
.skillMore-leave-to {
    opacity: 0;
}

@media screen and (max-width: 1280px) {
    .box {
        width: 700px;
    }

    .card {
        max-width: 200px;
        min-height: 350px;
    }
    .title {
        font-size: 1rem;
    }
}

@media screen and (max-width: 960px) {
    .box {
        width: 80vw;
    }

    .card {
        min-width: 80vw;
        min-height: 0px;
    }
}
</style>
