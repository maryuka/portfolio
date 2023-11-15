<template>
    <div>
        <v-container class="box">
            <v-row no-gutters justify="center">
                <v-col cols="12" sm="2" class="copy_catch d-flex justify-center">
                    <div class="vertical">
                        <p>人と人とを<br></p>
                        <p class="tsunagu pt-sm-16 mt-sm-16">繋ぐ</p>
                    </div>
                </v-col>
                <v-col cols="12" sm="7" class="copy_txt d-flex justify-center align-center">
                    <div class="pl-sm-10">
                        <p>人から人へ。<br>
                            より多くの 想いを 気持ちを お届けする。<br>
                            そんなお手伝いができればと思っております。
                        </p>
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