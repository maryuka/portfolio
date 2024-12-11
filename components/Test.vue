<template>
  <v-container class="py-12">
    <v-row>
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="6"
        sm="4"
        md="3"
        class="d-flex justify-center"
      >
        <v-card
          class="py-4 text-center hover-shadow"
          width="180"
          max-width="200"
        >
          <!-- スキル名 -->
          <div class="text-center pb-4">
            <span class="font-weight-bold">{{ skill.name }}</span>
          </div>
          <v-divider class="pb-4" />
          <div class="position-relative progress mx-auto">
            <div class="skill-img">
              <v-img
                :src="skill.image"
                alt="skill.name"
                class="mx-auto"
                width="40"
                height="40"
              />
            </div>
            <!-- 円形プログレスバー -->
            <v-progress-circular
              :model-value="skill.progress"
              color="#8aa7eb"
              size="100"
              width="8"
              class="skill-circle"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const skills = [
  { name: "Photoshop", image: "/img/photoshop.png", progress: 75 },
  {
    name: "Illustrator",
    image: "/img/illustrator.png",
    progress: 65,
  },
  { name: "HTML5", image: "/img/html5.png", progress: 90 },
  { name: "CSS", image: "/img/css.png", progress: 85 },
  { name: "Canva", image: "/img/canva.png", progress: 70 },
  { name: "Word", image: "/img/word.png", progress: 80 },
  { name: "Figma", image: "/img/figma.png", progress: 60 },
  { name: "Slack", image: "/img/slack.png", progress: 50 },
  { name: "Excel", image: "/img/excel.png", progress: 90 },
  { name: "PowerPoint", image: "/img/powerpoint.png", progress: 85 },
];
</script>

<style>
/* デザイン調整用 */
.v-card {
  border-radius: 12px;
}

.progress {
  width: 100px;
  height: 100px;
}

.skill-img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-flow: center;
  align-items: center;
}

.skill-circle {
  position: relative;
  z-index: 0;
}

.hover-shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.hover-shadow:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
