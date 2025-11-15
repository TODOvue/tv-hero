<template>
  <tv-hero
    :configHero="configHero"
    @click-button="handleClick"
    @click-secondary-button="handleClickSecondary"
  />
</template>

<script setup>
import { ref } from "vue";
import { TvHero } from "@todovue/tv-hero";
import "@todovue/tv-hero/style.css";

const configHero = ref({
  alt: "TODOvue Logo",
  buttonSecondary: "View last blog",
  button: "View all blogs",
  description: "Introducing my Vue.js blog!...",
  image: "https://todovue.com/logo.png",
  title: "TODOvue Blog",
});

const handleClick = () => {
  console.log("click button");
}

const handleClickSecondary = () => {
  console.log("click secondary button");
}
</script>
