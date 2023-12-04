<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
    <div>
        <v-container class="box">
            <v-row no-gutters justify="center">
                <v-col cols="12" sm="2" class="copy_catch d-flex justify-center">
                    <div v-motion :initial="{ opacity: 0 }" :visibleOnce="{
                    opacity: 1, transition: {
                        duration: 1000, type: 'keyframes',
                        ease: 'easeOut', delay: 300,
                    },}">
                        <div class="vertical">
                            <p v-text="$t(`Catch.title1`)" style="white-space: pre-wrap;"></p>
                            <p v-text="$t(`Catch.title2`)" style="white-space: pre-wrap;" class="tsunagu pt-sm-16 mt-sm-16"></p>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="7" class="copy_txt d-flex justify-center align-center">
                    <div v-motion :initial="{ opacity: 0 }" :visibleOnce="{
                    opacity: 1, transition: {
                        duration: 1000, type: 'keyframes',
                        ease: 'easeOut', delay: 300,
                    },}">
                        <div class="pl-sm-10">
                            <p v-text="$t(`Catch.text`)" style="white-space: pre-wrap;"></p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<style  scoped>
.box {
    padding: 128px 0;
}

.vertical {
    writing-mode: vertical-rl;
}

.copy_catch {
    font-size: 2.2rem;
}

.copy_txt {
    min-width: 500px;
    font-size: 1.2rem;
    letter-spacing: .05em;
}

@media screen and (max-width: 600px) {
    .box {
        padding: 18vw 0;
    }

    .copy_catch {
        margin-bottom: 50px;
        font-size: 7.3vw;
    }

    .copy_txt {
        min-width: 0px;
        text-align: center;
        font-size: 3.5vw;
    }

    .tsunagu {
        padding-top: 30vw;
    }
}
</style>