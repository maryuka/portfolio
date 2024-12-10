<script setup lang="ts">
const { t, locale } = useI18n();
const title_txt = t(`Contact.title`);
</script>
<template>
  <v-sheet class="contact_sheet d-flex justify-center" id="Contact">
    <v-container class="contact_box py-16 my-16 mx-3">
      <PartsTitle :title="title_txt" />
      <v-sheet class="mx-auto pt-16 form">
        <p>
          私にご用の方は、Xの<a href="http://x.com/maryuka_y">@maryuka_y</a
          >のDMまでご連絡ください。
        </p>
      </v-sheet>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.contact_sheet {
  height: 100%;
  position: relative;
  transform: translateZ(0);
  z-index: 4;
}

.contact_box {
  width: 960px;
}

.google_form {
  width: 640px;
  height: 800px;
}

@media screen and (max-width: 960px) {
  .google_form {
    width: 100%;
    height: 1000px;
  }
}

.form {
  max-width: 720px;
}

@media screen and (max-width: 960px) {
  .form {
    max-width: 500px;
  }
}

.form_item {
  border-top: 1px solid #ddd;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 960px) {
  .form_item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    display: block;
  }
}

.form_item:nth-child(5) {
  border-bottom: 1px solid #ddd;
}

.form_item_label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
}

.form_item_label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}

.form_item_label_required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #a7bcf3;
  color: #fff;
  font-size: 14px;
}

.form_item_input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 500px;
  background: #f8f9ff;
  font-size: 18px;
}

@media screen and (max-width: 960px) {
  .form_item_input {
    margin-left: auto;
    margin-right: auto;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
  }
}

.form_item_textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 500px;
  background: #f8f9ff;
  font-size: 18px;
}

@media screen and (max-width: 960px) {
  .form_item_textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
  }
}

.form_btn {
  width: 200px;
  height: 50px;
  background-color: #a7bcf3;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}

@media screen and (max-width: 1280px) {
  .contact_box {
    width: 700px;
  }
}

@media screen and (max-width: 960px) {
  .contact_box {
    width: 95vw;
  }
}
</style>
