<script setup lang="ts">
const { t, locale } = useI18n();
const title_txt = t(`About.title`);
</script>

<template>
  <v-sheet class="sheet d-flex justify-center" id="About">
    <v-container class="box py-16 my-16 mx-3">
      <PartsTitle :title="title_txt" />
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
        <v-row no-gutters class="profile mt-16" justify="center">
          <v-col class="txt_box" cols="12" lg="5">
            <h1
              v-text="$t(`About.profile.title`)"
              style="white-space: pre-wrap"
              class="profile_title is_en"
            ></h1>
            <p
              v-text="$t(`About.profile.text`)"
              style="white-space: pre-wrap"
              class="txt mt-10"
            ></p>
            <div class="sns_wrap">
              <a href="https://x.com/maryuka_y">
                <NuxtImg src="/img/x.png" class="img_x" />
              </a>
              <a href="https://github.com/maryuka">
                <NuxtImg src="/img/github.png" class="img_github" />
              </a>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="img_box d-flex justify-center" cols="12" lg="4">
            <img class="img mx-auto rounded-xl" src="/img/profile.jpg" />
          </v-col>
        </v-row>
      </div>
      <!-- <div
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
        <v-row no-gutters class="profile is_reverse mt-16" justify="center">
          <v-col class="txt_box" cols="12" lg="4">
            <h1
              v-text="$t(`About.likes.title`)"
              style="white-space: pre-wrap"
              class="profile_title is_en"
            ></h1>
            <p
              v-text="$t(`About.likes.text`)"
              style="white-space: pre-wrap"
              class="txt mt-10"
            ></p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="img_box mt-10 d-flex justify-center" cols="12" lg="6">
            <div class="img_frame">
              <div class="img_01"></div>
              <div class="img_02"></div>
              <div class="img_03"></div>
            </div>
          </v-col>
        </v-row>
      </div> -->
    </v-container>
  </v-sheet>
</template>

<style scoped>
.sheet {
  background-color: #e5eaf6;
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

.sns_wrap {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.img {
  height: 450px;
  width: 336px;
}

.img_frame {
  position: relative;
  height: 450px;
  width: 336px;
  margin: 0 auto;
}

.img_01,
.img_02,
.img_03 {
  position: absolute;
  top: 0;
  left: 0;
  width: 450px;
  height: 300px;
  border-radius: 24px;
  background-size: cover;
  background-repeat: no-repeat;
}

.img_x,
.img_github {
  width: 30px;
  height: 30px;
}

.img_01 {
  background-image: url("/img/like1.webp");
  animation: slide-animation-01 24s infinite;
}

.img_02 {
  background-image: url("/img/like2.webp");
  animation: slide-animation-02 24s infinite;
}

.img_03 {
  background-image: url("/img/like3.webp");
  animation: slide-animation-03 24s infinite;
}

@keyframes slide-animation-01 {
  0% {
    opacity: 1;
  }

  30% {
    opacity: 1;
  }

  40% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slide-animation-02 {
  0% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  70% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes slide-animation-03 {
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  70% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 1280px) {
  .box {
    width: auto;
  }

  .img {
    margin-top: 50px;
    width: 500px;
    height: 668px;
  }
}

@media screen and (max-width: 960px) {
  .box {
    width: auto;
  }

  .img {
    margin-top: 50px;
    width: 80vw;
    height: 106vw;
  }
}
</style>
