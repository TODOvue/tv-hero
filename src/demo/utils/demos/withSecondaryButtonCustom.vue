<template>
  <tv-hero
    :configHero="configHero"
    :customHero="customHero"
    @click-button="handleClick"
    @click-secondary-button="handleClickSecondary"
  />
</template>

<script setup>
import { ref } from "vue";
import { TvHero } from "@todovue/tv-hero";

const configHero = ref({
  alt: "TODOvue Logo",
  buttonSecondary: "View last blog",
  button: "View all blogs",
  description: "Introducing my Vue.js blog!...",
  image: "https://todovue.com/logo.png",
  title: "TODOvue Blog",
});

const customHero = ref({
  bgBody: "#1e1d23",
  bgButton: "#8673a1",
  bgButtonSecondary: "#79308d",
  buttonSecondaryText: "#e1e2dc",
  buttonText: "#e1e2dc",
  colorBody: "#e1e2dc",
});

const handleClick = () => {
  console.log("click button");
}

const handleClickSecondary = () => {
  console.log("click secondary button");
}
</script>
