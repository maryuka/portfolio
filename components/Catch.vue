<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div>
    <div class="box">
      <p
        class="copy_catch"
        v-text="$t(`Catch.title1`)"
        style="white-space: pre-wrap"
      ></p>
      <p
        class="copy_txt"
        v-text="$t(`Catch.text`)"
        style="white-space: pre-wrap"
      ></p>
    </div>
  </div>
</template>

<style scoped>
.box {
  padding: 128px 0;
}

.copy_catch {
  font-size: 1.8rem;
  text-align: center;
  padding-bottom: 30px;
}

.copy_txt {
  min-width: 500px;
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  text-align: center;
  line-height: 2.5rem;
}

@media screen and (max-width: 600px) {
  .box {
    padding-top: 15vw;
    padding-bottom: 10vw;
  }

  .copy_catch {
    padding-bottom: 5vw;
    font-size: 5vw;
  }

  .copy_txt {
    min-width: 0px;
    text-align: center;
    font-size: 3.5vw;
  }
}
</style>
