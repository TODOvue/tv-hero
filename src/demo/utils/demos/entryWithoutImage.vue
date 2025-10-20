<template>
  <tv-hero
    :configHero="configHero"
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
</script>
