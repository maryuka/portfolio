<script setup lang="ts">
const active = ref(false)
</script>

<template>
    <nav id="nav">
        <div class="hamburger" v-on:click='active = !active'>
            <span class="line line1" v-bind:class="{ 'v-line1': active }"></span>
            <span class="line line2" v-bind:class="{ 'v-line2': active }"></span>
            <span class="line line3" v-bind:class="{ 'v-line3': active }"></span>
        </div>
        <Transition name="menu">
            <div class="menu" v-if="active">
                <ul>
                    <li>
                        <NuxtLink to="#About" class="menu_link" v-on:click="active = !active">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#Skills" class="menu_link" v-on:click="active = !active">Skills</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#Works" class="menu_link" v-on:click="active = !active">Works</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#Contact" class="menu_link" v-on:click="active = !active">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </nav>
</template>

<style>
section {
    text-align: center;
    padding: 40vh 0;
}

.hamburger {
    position: fixed;
    top: 26px;
    left: 0;
    width: 70px;
    height: 70px;
    cursor: pointer;
    z-index: 100;
}

.hamburger .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 32px;
    height: 2px;
    background: #2B2A36;
    text-align: center;
}

.hamburger .line1 {
    top: 16px;
    transition: 0.4s ease;
}

.hamburger .line2 {
    top: 26px;
    transition: 0.4s ease;
}

.hamburger .line3 {
    top: 36px;
    transition: 0.4s ease;
}

.v-line1 {
    transform: translateY(10px) rotate(-45deg);
    transition: 0.4s ease;
}

.v-line2 {
    transition: 0.4s ease;
    opacity: 0;
}

.v-line3 {
    transform: translateY(-10px) rotate(45deg);
    transition: 0.4s ease;
}

.menu-enter-active,
.menu-leave-active {
    transition: opacity 0.4s ease;
}

.menu-enter-from,
.menu-leave-to {
    opacity: 0;
}


.menu {
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu li {
    list-style: none;
    line-height: 1;
    padding: 1rem;
}

.menu ul li {
    font-size: 20px;
    line-height: 2;
    text-align: center;
}

.menu_link {
    text-decoration: none;
    color: #333333;
}
</style>