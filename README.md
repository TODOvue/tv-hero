<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Hero (TvHero)
A customizable, responsive Vue 3 hero component designed for web applications. Perfect for creating impactful landing sections with images, titles, descriptions, and call-to-action buttons. Fully compatible with Single Page Apps and Server-Side Rendered (SSR) environments like Nuxt 3.

[![npm](https://img.shields.io/npm/v/@todovue/tv-hero.svg)](https://www.npmjs.com/package/@todovue/tv-hero)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-hero.svg)](https://www.npmjs.com/package/@todovue/tv-hero)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-hero.svg)](https://www.npmjs.com/package/@todovue/tv-hero)
![License](https://img.shields.io/github/license/TODOvue/tv-hero)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-hero)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-hero)
![Node Version](https://img.shields.io/node/v/@todovue/tv-hero)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-hero)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-hero?style=social)

> Demo: https://ui.todovue.blog/hero

---
## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Configuration Object (configHero)](#configuration-object-confighero)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Layout Modes](#layout-modes)
- [Examples](#examples)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Styles Usage](#styles-usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---
## Features
- **Flexible layouts**: Standard hero with image or full-width text-only hero
- **Entry mode**: Special layout optimized for blog posts and article pages
- **Customizable styling**: Override colors for background, text, and buttons
- **Call-to-action support**: Primary and optional secondary buttons powered by `@todovue/tv-button`
- **Responsive design**: Adapts beautifully across all screen sizes
- **Dark/Light mode ready**: Built-in theme support with custom color options
- **SSR compatible**: Works seamlessly in Nuxt 3 and other SSR frameworks
- **TypeScript support**: Full type definitions included
- **Zero configuration**: Works out of the box with sensible defaults

---
## Installation
Using npm:
```bash
npm install @todovue/tv-hero
```
Using yarn:
```bash
yarn add @todovue/tv-hero
```
Using pnpm:
```bash
pnpm add @todovue/tv-hero
```

---
## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import '@todovue/tv-hero/style.css'
import '@todovue/tv-button/style.css'
import TvHero from '@todovue/tv-hero'

createApp(App)
  .use(TvHero) // enables <TvHero /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import '@todovue/tv-hero/style.css'
import '@todovue/tv-button/style.css'
import { TvHero } from '@todovue/tv-hero'

const heroConfig = {
  title: 'Welcome to TODOvue',
  description: 'Build amazing web applications with Vue.js',
  button: 'Get Started',
  image: 'https://example.com/hero-image.png',
  alt: 'Hero image'
}

function onButtonClick() {
  console.log('CTA clicked!')
}
</script>

<template>
  <TvHero :configHero="heroConfig" @click-button="onButtonClick" />
</template>
```

---
## Nuxt 4 / SSR Usage
Create a plugin file: `plugins/tv-hero.client.ts` (or without suffix for SSR-safe usage):
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-card/nuxt'
  ]
})
```

Use anywhere in your Nuxt app:
```vue
<template>
  <TvHero :configHero="heroData" @click-button="handleAction" />
</template>

<script setup>
const heroData = {
  title: 'My Nuxt App',
  description: 'Server-side rendered with love',
  button: 'Learn More',
  image: '/images/hero.jpg'
}

const handleAction = () => {
  navigateTo('/about')
}
</script>
```
Optional direct import (no plugin):
```vue
<script setup>
import '@todovue/tv-hero/style.css'
import '@todovue/tv-button/style.css'
import { TvHero } from '@todovue/tv-hero'
</script>
```

---
## Component Registration Options
| Approach                                                      | When to use                                |
|---------------------------------------------------------------|--------------------------------------------|
| Global via `app.use(TvHero)`                                  | Multiple hero sections across your app     |
| Local named import `{ TvHero }`                               | Isolated usage or code-splitting scenarios |
| Direct default import `import TvHero from '@todovue/tv-hero'` | Single usage or manual registration        |

---
## Props
| Prop         | Type    | Default | Description                                                              |
|--------------|---------|---------|--------------------------------------------------------------------------|
| configHero   | Object  | {}      | Main configuration object with title, description, buttons, and image.   |
| customHero   | Object  | {}      | Custom styling object for colors and themes.                             |
| isEntry      | Boolean | false   | Enables entry/article layout mode (full-width, no buttons).              |

---
## Events
| Event name (kebab)        | Description                                 |
|---------------------------|---------------------------------------------|
| `click-button`            | Emitted when primary button is clicked.     |
| `click-secondary-button`  | Emitted when secondary button is clicked.   |

Usage:
```vue
<TvHero 
  :configHero="config" 
  @click-button="handlePrimary" 
  @click-secondary-button="handleSecondary" 
/>
```

---
## Configuration Object (configHero)
The `configHero` prop accepts an object with the following properties:

| Property         | Type   | Required | Description                                    |
|------------------|--------|----------|------------------------------------------------|
| title            | String | Yes      | Main heading text for the hero section.        |
| description      | String | Yes      | Descriptive text displayed below the title.    |
| image            | String | No       | URL of the hero image.                         |
| alt              | String | No       | Alt text for the image (accessibility).        |
| button           | String | No       | Text for the primary call-to-action button.    |
| buttonSecondary  | String | No       | Text for the optional secondary button.        |

**Example:**
```js
const configHero = {
  title: 'TODOvue Blog',
  description: 'Explore the world of Vue.js development',
  button: 'View All Posts',
  buttonSecondary: 'Latest Article',
  image: 'https://example.com/logo.png',
  alt: 'TODOvue Logo'
}
```

---
## Customization (Styles / Theming)
The `customHero` prop allows you to override default colors and styles:

| Property              | Type   | Description                                |
|-----------------------|--------|--------------------------------------------|
| bgBody                | String | Background color for the hero section.     |
| colorBody             | String | Text color for title and description.      |
| bgButton              | String | Background color for primary button.       |
| colorButton           | String | Text color for primary button.             |
| bgButtonSecondary     | String | Background color for secondary button.     |
| colorButtonSecondary  | String | Text color for secondary button.           |

**Example:**
```vue
<TvHero 
  :configHero="heroConfig"
  :customHero="{
    bgBody: '#1e1d23',
    colorBody: '#e1e2dc',
    bgButton: '#8673a1',
    colorButton: '#ffffff',
    bgButtonSecondary: '#79308d',
    colorButtonSecondary: '#ffffff'
  }"
/>
```

The component automatically:
- Generates subtle hover effects for custom button colors
- Creates a decorative separator bar below the title with matching colors
- Applies box-shadow effects for visual depth

---
## Layout Modes

### Standard Hero (with image)
Default layout with image on the left and content on the right:
```vue
<TvHero :configHero="{ 
  title: 'Welcome', 
  description: 'Learn Vue.js',
  button: 'Start',
  image: '/hero.png' 
}" />
```

### Full-width Hero (without image)
Omit the `image` property for a centered, text-focused layout:
```vue
<TvHero :configHero="{ 
  title: 'Welcome', 
  description: 'Learn Vue.js',
  button: 'Start'
}" />
```

### Entry/Article Mode
Set `isEntry` to `true` for blog post headers (buttons are hidden):
```vue
<TvHero 
  :configHero="articleHero" 
  :isEntry="true" 
/>
```

---
## Examples

### Basic Hero
```vue
<TvHero 
  :configHero="{
    title: 'TODOvue Blog',
    description: 'Discover Vue.js tips and tutorials',
    button: 'View All Blogs',
    image: 'https://todovue.com/logo.png',
    alt: 'TODOvue Logo'
  }"
  @click-button="() => router.push('/blogs')"
/>
```

### Hero with Secondary Button
```vue
<TvHero 
  :configHero="{
    title: 'TODOvue Blog',
    description: 'Stay updated with the latest Vue.js content',
    button: 'View All Blogs',
    buttonSecondary: 'Read Latest',
    image: 'https://todovue.com/logo.png',
    alt: 'TODOvue Logo'
  }"
  @click-button="viewAll"
  @click-secondary-button="viewLatest"
/>
```

### Custom Themed Hero
```vue
<TvHero 
  :configHero="{
    title: 'Modern Design',
    description: 'Beautiful components for Vue 3',
    button: 'Explore',
    buttonSecondary: 'Documentation',
    image: '/logo.png'
  }"
  :customHero="{
    bgBody: '#202020',
    colorBody: '#ffffff',
    bgButton: '#8673a1',
    colorButton: '#e1e2dc',
    bgButtonSecondary: '#79308d',
    colorButtonSecondary: '#e1e2dc'
  }"
/>
```

### Entry/Article Hero
```vue
<TvHero 
  :configHero="{
    title: 'What is Vue.js?',
    description: 'An introduction to the progressive JavaScript framework',
    image: '/article-header.jpg',
    alt: 'Vue.js Article'
  }"
  :isEntry="true"
/>
```

---
## Accessibility
- **Semantic HTML**: Uses proper heading hierarchy (`<h1>` for title)
- **Alt text**: Always provide `alt` property when using images
- **ARIA labels**: Buttons inherit accessibility from `@todovue/tv-button`
- **Keyboard navigation**: Full keyboard support for interactive elements
- **Color contrast**: Default theme meets WCAG AA standards

---
## SSR Notes
- **Zero DOM dependencies**: No direct `window` or `document` access
- **Safe for SSR**: Works in Nuxt 3, Vite SSR, and other server environments
- **Image optimization**: Works with Nuxt Image and other SSR image tools
- **Composable pattern**: Uses Vue 3 Composition API with computed properties

---
## Styles Usage

### Vue 3 / Vite SPA
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import { TvHero } from '@todovue/tv-hero'
import '@todovue/tv-hero/style.css'

const app = createApp(App)
app.component('TvHero', TvHero)
app.mount('#app')
```

### Nuxt 3 / 4
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@todovue/tv-hero/style.css'],
})
```

---
## Development
```bash
git clone https://github.com/TODOvue/tv-hero.git
cd tv-hero
npm install
npm run dev     # run demo playground
npm run build   # build library
```
The demo playground includes multiple examples showcasing different configurations and customization options.

---
## Contributing
PRs and issues welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

---
### Dependencies
- **[@todovue/tv-button](https://www.npmjs.com/package/@todovue/tv-button)**: Powers the call-to-action buttons
- **Vue 3**: Peer dependency (^3.0.0)

---
## License
MIT © TODOvue

---
### Attributions
Crafted for the TODOvue component ecosystem
