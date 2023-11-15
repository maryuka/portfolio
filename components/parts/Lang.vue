<script setup lang="ts">
const jp = ref(true)
</script>

<template>
    <div class="lang">
        <ul>
            <li class="JPbtn">
                <NuxtLink to="/" v-on:click='jp = jp' class="lang_link">Jp</NuxtLink>
            </li>
            /
            <li class="ENbtn">
                <NuxtLink to="/En" v-on:click='jp = !jp' class="lang_link">En</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style>
.lang {
    z-index: 100;
    position: fixed;
    top: 26px;
    right: 26px;
}

.lang li {
    font-size: 20px;
    display: inline;
    color: #2B2A36;
}

.lang_link {
    text-decoration: none;
    color: #2B2A36;
}
</style>