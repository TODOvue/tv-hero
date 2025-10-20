<script setup>
import { defineAsyncComponent } from 'vue'
import TvDemo from '@todovue/tv-demo'
import { demos } from './utils/mocks.js';

const TvHero = defineAsyncComponent(/* webpackChunkName: "TvHero" */() => import('../components/TvHero.vue'))

</script>

<template>
  <tv-demo
    :component="TvHero"
    :variants="demos"
    hide-background
    nameComponent="TvHero"
    npmInstall="@todovue/tv-hero"
    sourceLink="https://github.com/TODOvue/tv-hero"
    urlClone="https://github.com/TODOvue/tv-hero.git"
    version="1.0.0"
  ></tv-demo>
</template>

<style scoped>

</style>
