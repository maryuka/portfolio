<script setup>
const dataFrontend = {
    datasets: [{
        data: [90, 90, 80, 80, 70, 70, 60]
    }],
    labels: ['HTML / CSS',
        'WordPress',
        'Premiere / AE',
        'Photoshop',
        'TypeScript',
        'Vue3 / Nuxt3',
        'Figma'
    ]
}
const dataBackend = {
    datasets: [{
        data: [90, 90, 80, 80, 80]
    }],
    labels: ['SQL / MySQL',
        'PHP',
        'Python',
        'Node.js',
        'Git / Github',
    ]
}
</script>

<template>
    <v-sheet class="sheet" id="Skills">
        <v-container class="box py-16 my-16">
            <h1 class="title">できること</h1>
            <div class="pt-16">
                <h1 class="subtitle">Frontend</h1>
                <PartsChart :canvasId="'chartfront'" :chartData="dataFrontend" />
            </div>
            <div class="pt-16">
                <h1 class="subtitle">Backend</h1>
                <PartsChart :canvasId="'chartback'" :chartData="dataBackend" />
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

.subtitle {
    text-align: center;
}

@media screen and (max-width: 1280px) {
    .box {
        width: 700px;
    }
}

@media screen and (max-width: 960px) {
    .box {
        width: 80vw;
    }

}
</style>
