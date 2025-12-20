<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js';

const TvHero = defineAsyncComponent(/* webpackChunkName: "TvHero" */() => import('../components/TvHero.vue'))

</script>

<template>
  <TvDemo
    :component="TvHero"
    :variants="demos"
    hide-background
    component-name="TvHero"
    npm-install="@todovue/tv-hero"
    source-link="https://github.com/TODOvue/tv-hero"
    url-clone="https://github.com/TODOvue/tv-hero.git"
    version="1.1.2"
  />
</template>

<style scoped>

</style>
