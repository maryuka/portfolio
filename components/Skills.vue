<script setup lang="ts">
import { ref } from "vue";
const sleep = async (ms: number) => new Promise((res) => setTimeout(res, ms));

const readMore = ref({ Activated: false, Inactivated: true });

const readMoreInactivatedFunc = async () => {
  readMore.value.Inactivated = !readMore.value.Inactivated;
  await sleep(400);
  readMore.value.Activated = !readMore.value.Activated;
};

const { t, locale } = useI18n();
const title_txt = t(`Skills.title`);
</script>

<template>
  <v-sheet class="sheet d-flex justify-center" id="Skills">
    <v-container class="box pb-16 mb-16">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'easeOut',
            delay: 400,
          },
        }"
      >
        <PartsTitle :title="title_txt" />
        <v-container class="px-0">
          <v-row justify="center">
            <v-col cols="auto">
              <v-card class="mx-auto my-2 card" elevation="3">
                <v-card-item>
                  <v-card-title
                    class="title"
                    v-text="$t(`Skills.item.typescript.title`)"
                    style="white-space: pre-wrap"
                  ></v-card-title>
                  <v-card-subtitle
                    v-text="$t(`Skills.item.typescript.period`)"
                    style="white-space: pre-wrap"
                  ></v-card-subtitle>
                </v-card-item>
                <v-card-text
                  v-text="$t(`Skills.item.typescript.text`)"
                  style="white-space: pre-wrap"
                ></v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card class="mx-auto my-2 card" elevation="3">
                <v-card-item>
                  <v-card-title
                    class="title"
                    v-text="$t(`Skills.item.react.title`)"
                    style="white-space: pre-wrap"
                  ></v-card-title>
                  <v-card-subtitle
                    v-text="$t(`Skills.item.react.period`)"
                    style="white-space: pre-wrap"
                  ></v-card-subtitle>
                </v-card-item>
                <v-card-text
                  v-text="$t(`Skills.item.react.text`)"
                  style="white-space: pre-wrap"
                ></v-card-text>
              </v-card>
            </v-col>

            <v-col cols="auto">
              <v-card class="mx-auto my-2 card" elevation="3">
                <v-card-item>
                  <v-card-title
                    class="title"
                    v-text="$t(`Skills.item.vue.title`)"
                    style="white-space: pre-wrap"
                  ></v-card-title>
                  <v-card-subtitle
                    v-text="$t(`Skills.item.vue.period`)"
                    style="white-space: pre-wrap"
                  ></v-card-subtitle>
                </v-card-item>
                <v-card-text
                  v-text="$t(`Skills.item.vue.text`)"
                  style="white-space: pre-wrap"
                ></v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <Transition name="moreButton">
            <v-btn
              class="button"
              v-if="!readMore.Activated"
              @click="
                readMore.Activated = !readMore.Activated;
                readMore.Inactivated = !readMore.Inactivated;
              "
              ><span v-text="$t(`Skills.seemore`)"></span
            ></v-btn>
          </Transition>
          <Transition name=" skillMore">
            <div v-if="!readMore.Inactivated">
              <v-row justify="center">
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.wordpress.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.wordpress.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.wordpress.text`)"
                      style="white-space: pre-wrap"
                    ></v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.html.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.html.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.html.text`)"
                      style="white-space: pre-wrap"
                    ></v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.php.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.php.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.php.text`)"
                      style="white-space: pre-wrap"
                    ></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.python.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.python.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.python.text`)"
                      style="white-space: pre-wrap"
                    ></v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.mysql.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.mysql.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.mysql.text`)"
                      style="white-space: pre-wrap"
                    ></v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.postgresql.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.postgresql.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.postgresql.text`)"
                      style="white-space: pre-wrap"
                    ></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.c.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.c.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.c.text`)"
                      style="white-space: pre-wrap"
                    ></v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.premiere.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.premiere.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.premiere.text`)"
                      style="white-space: pre-wrap"
                    ></v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="auto">
                  <v-card class="mx-auto my-2 card" elevation="3">
                    <v-card-item>
                      <v-card-title
                        class="title"
                        v-text="$t(`Skills.item.illustrator.title`)"
                        style="white-space: pre-wrap"
                      ></v-card-title>
                      <v-card-subtitle
                        v-text="$t(`Skills.item.illustrator.period`)"
                        style="white-space: pre-wrap"
                      ></v-card-subtitle>
                    </v-card-item>
                    <v-card-text
                      v-text="$t(`Skills.item.illustrator.text`)"
                      style="white-space: pre-wrap"
                      class="text"
                    ></v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-btn class="button" @click="readMoreInactivatedFunc"
                ><span v-text="$t(`Skills.close`)"></span
              ></v-btn>
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
    width: auto;
  }

  .card {
    min-width: 80vw;
    min-height: 0px;
  }

  .text {
    font-size: 1rem;
  }
}
</style>
