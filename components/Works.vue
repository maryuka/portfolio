<script setup>
import { ref } from "vue";
const model = ref(null);
const items = [
  { src: "/img/worksPortfolio.webp" },
  { src: "/img/worksbot.webp" },
  { src: "/img/worksgame.webp" },
];

const { t, locale } = useI18n();
const title_txt = t(`Works.title`);

const dot_color = "#ffffff";
</script>

<template>
  <v-sheet class="works_sheet d-flex justify-center" id="Works">
    <v-container class="works_box py-16 my-16 mx-3">
      <PartsTitle :title="title_txt" />
      <v-timeline-item :dot-color="dot_color">
        <template v-slot:opposite>
          <p
            v-text="$t(`Works.item.bitriver.date`)"
            style="white-space: pre-wrap"
            class="date"
          ></p>
        </template>
        <div>
          <div
            v-text="$t(`Works.item.bitriver.title`)"
            style="white-space: pre-wrap"
            class="works_title"
          ></div>
          <p
            v-text="$t(`Works.item.bitriver.text`)"
            style="white-space: pre-wrap"
            class="text"
          ></p>
        </div>
      </v-timeline-item>
      <v-timeline-item :dot-color="dot_color">
        <template v-slot:opposite>
          <p
            v-text="$t(`Works.item.worldclean.date`)"
            style="white-space: pre-wrap"
            class="date"
          ></p>
        </template>
        <div>
          <div
            v-text="$t(`Works.item.worldclean.title`)"
            style="white-space: pre-wrap"
            class="works_title"
          ></div>
          <p
            v-text="$t(`Works.item.worldclean.text`)"
            style="white-space: pre-wrap"
            class="text"
          ></p>
          <v-container>
            <v-row class="img_box">
              <img class="img" src="/img/worksWorldClean.webp" />
            </v-row>
          </v-container>
        </div>
      </v-timeline-item>
      <v-timeline-item :dot-color="dot_color">
        <template v-slot:opposite>
          <p
            v-text="$t(`Works.item.portfolio.date`)"
            style="white-space: pre-wrap"
            class="date"
          ></p>
        </template>
        <div>
          <div
            v-text="$t(`Works.item.portfolio.title`)"
            style="white-space: pre-wrap"
            class="works_title"
          ></div>
          <p
            v-text="$t(`Works.item.portfolio.text`)"
            style="white-space: pre-wrap"
            class="text"
          ></p>
          <v-container>
            <v-row class="img_box">
              <img
                class="img"
                src="/img/worksPortfolio.webp"
                alt="ポートフォリオサイトのスクリーンショット"
              />
            </v-row>
          </v-container>
        </div>
      </v-timeline-item>
      <v-timeline-item :dot-color="dot_color">
        <template v-slot:opposite>
          <p
            v-text="$t(`Works.item.xbot.date`)"
            style="white-space: pre-wrap"
            class="date"
          ></p>
        </template>
        <div>
          <span
            v-text="$t(`Works.item.xbot.title`)"
            style="white-space: pre-wrap"
            class="works_title pr-2"
          ></span>
          <a href="https://x.com/2434EN_Notify" style="font-size: small"
            >@2434EN_Notify</a
          >
          <p
            v-text="$t(`Works.item.xbot.text`)"
            style="white-space: pre-wrap"
            class="text"
          ></p>
          <v-container>
            <v-row class="img_box">
              <img
                class="img"
                src="/img/worksbot.webp"
                alt="制作したbotのスクリーンショット"
              />
            </v-row>
          </v-container>
        </div>
      </v-timeline-item>
      <v-timeline-item :dot-color="dot_color">
        <template v-slot:opposite>
          <p
            v-text="$t(`Works.item.game.date`)"
            style="white-space: pre-wrap"
            class="date"
          ></p>
        </template>
        <div>
          <div
            v-text="$t(`Works.item.game.title`)"
            style="white-space: pre-wrap"
            class="works_title"
          ></div>
          <p
            v-text="$t(`Works.item.game.text`)"
            style="white-space: pre-wrap"
            class="text"
          ></p>
          <v-container>
            <v-row class="img_box">
              <img
                class="img"
                src="/img/worksgame.webp"
                alt="制作したゲームのスクリーンショット"
              />
            </v-row>
          </v-container>
        </div>
      </v-timeline-item>
      <v-timeline-item :dot-color="dot_color">
        <template v-slot:opposite>
          <p
            v-text="$t(`Works.item.iyah.date`)"
            style="white-space: pre-wrap"
            class="date"
          ></p>
        </template>
        <div>
          <div
            v-text="$t(`Works.item.iyah.title`)"
            style="white-space: pre-wrap"
            class="works_title"
          ></div>
          <p
            v-text="$t(`Works.item.iyah.text`)"
            style="white-space: pre-wrap"
            class="text"
          ></p>
        </div>
      </v-timeline-item>
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
  font-size: 1.2rem;
  font-weight: 600;
}

.img_box {
  margin-top: 10px;
}

.img {
  width: 600px;
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
    width: auto;
  }

  .text {
    font-size: 1rem;
  }

  .img {
    width: 60vw;
    height: auto;
    border-radius: 10px;
  }

  .date {
    font-size: 0.8rem;
  }
}
</style>
