<template>
  <tv-hero
    :config-hero="configHero"
    is-entry
  />
</template>

<script setup>
import { ref } from "vue";
import { TvHero } from "@todovue/tv-hero";
import "@todovue/tv-hero/style.css";
import "@todovue/tv-button/style.css";

const configHero = ref({
  description: "Introducing my Vue.js blog!...",
  title: "TODOvue Blog",
});
</script>
