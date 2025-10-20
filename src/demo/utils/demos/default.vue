<template>
  <tv-hero
    :configHero="configHero"
    @click-button="handleClick"
  />
</template>

<script setup>
import { ref } from "vue";
import { TvHero } from "@todovue/tv-hero";

const configHero = ref({
  alt: "TODOvue Logo",
  button: "View all blogs",
  description: "Introducing my Vue.js blog!...",
  image: "https://todovue.com/logo.png",
  title: "TODOvue Blog",
});

const handleClick = () => {
  console.log("click button");
}
</script>
