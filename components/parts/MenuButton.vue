<script setup lang="ts">
const active = ref(false);

const nav_target = ref(null);
const { apply } = useMotion(nav_target, {
  initial: {
    display: "none",
    opacity: 0,
    transition: {
      display: {
        delay: 400,
      },
      opacity: {
        duration: 400,
        type: "keyframes",
        ease: "easeOut",
      },
    },
  },
  leave: {
    display: "block",
    opacity: 0.8,
    transition: {
      duration: 400,
      type: "keyframes",
      ease: "easeOut",
    },
  },
});

const scrolly = ref(0);

const showScrollallow = async () => {
  scrolly.value = window.scrollY;

  if (-10 < scrolly.value && scrolly.value < 900) {
    await apply("initial");
  } else {
    await apply("leave");
  }
};

onMounted(() => {
  window.addEventListener("scroll", showScrollallow);
});
</script>

<template>
  <nav id="nav">
    <div ref="nav_target" class="hamburger" v-on:click="active = !active">
      <span class="line line1" v-bind:class="{ 'v-line1': active }"></span>
      <span class="line line2" v-bind:class="{ 'v-line2': active }"></span>
      <span class="line line3" v-bind:class="{ 'v-line3': active }"></span>
    </div>
    <Transition name="menu">
      <div class="menu" v-if="active">
        <ul>
          <li>
            <NuxtLink
              v-text="$t(`Menu.about`)"
              style="white-space: pre-wrap"
              to="#About"
              class="menu_link"
              v-on:click="active = !active"
            ></NuxtLink>
          </li>
          <li>
            <NuxtLink
              v-text="$t(`Menu.works`)"
              style="white-space: pre-wrap"
              to="#Works"
              class="menu_link"
              v-on:click="active = !active"
            ></NuxtLink>
          </li>
          <li>
            <NuxtLink
              v-text="$t(`Menu.skills`)"
              style="white-space: pre-wrap"
              to="#Skills"
              class="menu_link"
              v-on:click="active = !active"
            ></NuxtLink>
          </li>
          <li>
            <NuxtLink
              v-text="$t(`Menu.contact`)"
              style="white-space: pre-wrap"
              to="#Contact"
              class="menu_link"
              v-on:click="active = !active"
            ></NuxtLink>
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
  opacity: 0;
}

.hamburger .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #2b2a36;
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
