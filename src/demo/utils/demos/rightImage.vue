<template>
  <TvHero :configHero="configHero" imagePosition="right" />
</template>

<script setup>
import { TvHero } from "todovue-hero";
import "todovue-hero/style.css";
import "todovue-button/style.css";

const configHero = {
  title: "Right Aligned Image",
  description: "This hero has the image positioned on the right side using the new imagePosition prop.",
  button: "Action",
  image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
  alt: "TODOvue Logo",
};
</script>
