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
  imagePosition: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right"].includes(value),
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
    <div
      class="tv-hero"
      :class="{
        'tv-hero-full': !hero.image && !$slots.image,
        'tv-hero-reverse': imagePosition === 'right',
      }"
    >
      <div v-if="hero.image || $slots.image" class="tv-hero-image">
        <slot name="image">
          <img :src="hero.image" :alt="hero.alt || 'Hero image'" />
        </slot>
      </div>
      <div class="tv-hero-content">
        <h1 class="tv-hero-title">
          <slot name="title">
            {{ hero.title }}
          </slot>
          <span class="tv-hero-separator" :style="custom?.bgAfter"></span>
        </h1>
        <div class="tv-hero-description">
          <slot name="description">
            {{ hero.description }}
          </slot>
        </div>
        <div
          v-if="!isEntry && (hero.button || hero.buttonSecondary || $slots.actions)"
          class="tv-hero-actions"
        >
          <slot name="actions">
            <tv-button
              v-if="hero.button"
              rounded
              :customStyle="custom?.customButton"
              @click-button="handleClick"
            >
              {{ hero.button }}
            </tv-button>
            <tv-button
              v-if="hero.buttonSecondary"
              rounded
              outlined
              :customStyle="custom?.customButtonSecondary"
              @click-button="handleClickSecondary"
            >
              {{ hero.buttonSecondary }}
            </tv-button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
