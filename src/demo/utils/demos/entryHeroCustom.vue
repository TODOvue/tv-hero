<template>
  <tv-hero
    :config-hero="configHero"
    :custom-hero="customHero"
    is-entry
  />
</template>

<script setup>
import { ref } from "vue";
import { TvHero } from "@todovue/tv-hero";
import "@todovue/tv-hero/style.css";
import "@todovue/tv-button/style.css";

const configHero = ref({
  alt: "TODOvue Logo",
  description: "Introducing my Vue.js blog!...",
  image: "https://todovue.com/logo.png",
  title: "TODOvue Blog",
});

const customHero = ref({
  bgBody: "#202020",
  colorBody: "#ffffff",
});
</script>
