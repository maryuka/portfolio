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

const title_txt = "私について"

</script>

<template>
    <v-sheet class="sheet" id="About">
        <v-container class="box py-16 my-16">
            <PartsTitle :title="title_txt" />
            <v-row no-gutters class="profile mt-16" justify="center">
                <v-col class="txt_box" cols="12" lg="4">
                    <h1 class="profile_title is_en">Profile</h1>
                    <p class="txt mt-10">
                        大学にて情報学を専攻しており、グループ署名を用いた匿名認証について研究しています。在学中に一般社団法人にてWebエンジニアとして自社のWebサイトを制作しました。他にも動画を作ったり写真を撮ったりゲームを作ったり、面白そうなことに色々手を出しています。いつか海外でWEB制作のお仕事をするために英語も勉強中です。
                    </p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="img_box mt-10  d-flex justify-center" cols="12" lg="6">
                    <img class="img mx-auto rounded-xl" src="/img/profile.webp">
                </v-col>
            </v-row>
            <v-row no-gutters class="profile is_reverse mt-16" justify="center">
                <v-col class="txt_box" cols="12" lg="4">
                    <h1 class="profile_title is_en">Likes</h1>
                    <p class="txt mt-10">
                        自然全般が好きです。<br>
                        〈花〉このサイトのテーマになっているお花はネモフィラです。和名は瑠璃唐草。かわいい。
                        <span style="font-size: 0.7rem;">※全て自分で撮影・編集した写真です。</span><br>
                        〈キャンプ〉焚き火が好きで好きで好きすぎて毎日焚き火の音を聞きながら寝てます笑 自然の中で作業したくて、たまにPCを持って近くのキャンプ上に作業しにいったりします。将来は森の近くに住みたいです。
                    </p>
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
    font-size: 0.9rem;
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