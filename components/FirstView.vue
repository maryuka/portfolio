<template>
    <v-container class="box">
        <img class="thumbnail mx-auto" src="/img/top.webp">
        <h1 class="copy">
            <div class="copy_txt name">Yuka</div>
            <div>
                <span class="copy_txt engineer">Engineer</span>
            </div>
        </h1>

    </v-container>
</template>

<style  scoped>
.box {
    position: relative;
    max-width: 1440px;
    margin-top: 40px;
    padding: 0;
}

@media screen and (max-width:1440px) {
    .box {
        margin-top: 0;
    }
}

.thumbnail {
    border-radius: 30px;
    width: 100%;
}

@media screen and (max-width:1440px) {
    .thumbnail {
        border-radius: 0px;
        margin-top: 0;
    }
}

.copy {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 5;
    right: 50px;
    margin: auto;
    height: 217px;
}

.copy_txt {
    background-color: #fff;
    line-height: 120%;
    padding-left: 80px;
    padding-right: 80px;
}

.copy_txt.engineer {
    float: right;
    font-size: 18px;
    margin-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
}

@media screen and (max-width:600px) {
    .copy {
        right: 0;
        height: 0;
    }

    .copy_txt.name {
        font-size: 6vw;
        padding-left: 15vw;
        padding-right: 15vw;
    }

    .copy_txt.engineer {
        font-size: 3vw;
    }
}
</style>
