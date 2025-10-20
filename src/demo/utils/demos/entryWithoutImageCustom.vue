<template>
  <tv-hero
    :configHero="configHero"
    :customHero="customHero"
    isEntry
  />
</template>

<script setup>
import { ref } from "vue";
import { TvHero } from "@todovue/tv-hero";

const configHero = ref({
  description: "Introducing my Vue.js blog!...",
  title: "TODOvue Blog",
});

const customHero = ref({
  bgBody: "#202020",
  colorBody: "#ffffff",
});
</script>
