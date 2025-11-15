<script setup>
import { TvButton } from '@todovue/tv-button';
import useHero from '../composable/useHero.js';

const props = defineProps({
  configHero: {
    type: Object,
    default: () => {},
  },
  customHero: {
    type: Object,
    default: () => {},
  },
  isEntry: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['clickButton', 'clickSecondaryButton']);

const { handleClick, handleClickSecondary, custom, hero } = useHero(props, emit);
</script>

<template>
  <div
    v-if="hero"
    class="tv-hero-body"
    :class="{ 'tv-hero-entry': isEntry }"
    :style="custom?.customHero"
  >
    <div class="tv-hero" :class="{ 'tv-hero-full': !hero.image }">
      <div v-if="hero.image" class="tv-hero-image">
        <img :src="hero.image" :alt="hero.alt || 'Hero image'" />
      </div>
      <div class="tv-hero-content">
        <h1 class="tv-hero-title">
          {{ hero.title }}
          <span class="tv-hero-separator" :style="custom?.bgAfter"></span>
        </h1>
        <p class="tv-hero-description">
          {{ hero.description }}
        </p>
        <div v-if="!isEntry && hero.button" class="tv-hero-actions">
          <tv-button
            isRounded
            :customStyle="custom?.customButton"
            @click-button="handleClick"
          >
            {{ hero.button }}
          </tv-button>
          <tv-button
            v-if="hero.buttonSecondary"
            isRounded
            isOutlined
            :customStyle="custom?.customButtonSecondary"
            @click-button="handleClickSecondary"
          >
            {{ hero.buttonSecondary }}
          </tv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
