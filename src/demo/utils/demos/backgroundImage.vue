<template>
  <TvHero :configHero="configHero" isBackgroundImage />
</template>

<script setup>
import { TvHero } from "todovue-hero";
import "todovue-hero/dist/style.css";

const configHero = {
  title: "Background Image Mode",
  description: "This hero uses the image as a background with an automatic overlay for better readability.",
  button: "Call to Action",
  image: "https://todovue.blog/magic-vue.png",
  alt: "Space Background",
};
</script>
