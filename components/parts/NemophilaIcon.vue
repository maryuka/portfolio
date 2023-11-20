<template>
    <span class="icon">
        <div class="circle" v-motion :initial="{ opacity: 0, x: 10, y: 8 }" :visibleOnce="{
            opacity: 1, x: 5, y: 8, transition: {
                opacity: {
                    type: 'keyframes', duration: 400, delay: 400,
                },
                x: { type: 'keyframes', ease: 'easeOut', duration: 300, delay: 400, repeat: 1, repeatType: 'reverse', },
                y: { type: 'keyframes', ease: 'easeOut', duration: 300, delay: 400, repeat: 1, repeatType: 'reverse', },
            },
        }" />
        <div class="circle" v-motion :initial="{ opacity: 0, x: 5, y: 3 }" :visibleOnce="{
            opacity: 1, x: 5, y: 8, transition: {
                opacity: {
                    type: 'keyframes', duration: 400, delay: 400,
                },
                x: { type: 'keyframes', ease: 'easeOut', duration: 300, delay: 400, repeat: 1, repeatType: 'reverse', },
                y: { type: 'keyframes', ease: 'easeOut', duration: 300, delay: 400, repeat: 1, repeatType: 'reverse', },
            },
        }" />
        <div class="circle" v-motion :initial="{ opacity: 0, x: 5, y: 13 }" :visibleOnce="{
            opacity: 1, x: 5, y: 8, transition: {
                opacity: {
                    type: 'keyframes', duration: 400, delay: 400,
                },
                x: { type: 'keyframes', ease: 'easeOut', duration: 300, delay: 400, repeat: 1, repeatType: 'reverse', },
                y: { type: 'keyframes', ease: 'easeOut', duration: 300, delay: 400, repeat: 1, repeatType: 'reverse', },
            },
        }" />
        <div class="circle" v-motion :initial="{ opacity: 0, x: 0, y: 8 }" :visibleOnce="{
            opacity: 1, x: 5, y: 8, transition: {
                opacity: {
                    type: 'keyframes', duration: 400, delay: 400,
                },
                x: { type: 'keyframes', ease: 'easeOut', duration: 300, delay: 400, repeat: 1, repeatType: 'reverse', },
                y: { type: 'keyframes', ease: 'easeOut', duration: 300, delay: 400, repeat: 1, repeatType: 'reverse', },
            },
        }" />
    </span>
</template>

<style scoped>
.icon {
    display: block;
    position: relative;
    width: 18px;
    height: 18px;
    line-height: 0;
}

.circle {
    display: block;
    width: 5px;
    height: 5px;
    background: #8aa7eb;
    border-radius: 4px;
    position: absolute;
}
</style>