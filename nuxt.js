import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-hero',
    configKey: 'tvHero'
  },
  setup(_options, nuxt) {
    const heroCss = '@todovue/tv-hero/style.css';
    const buttonCss = '@todovue/tv-button/style.css';
    
    const pushUnique = (path) => {
      if (!nuxt.options.css.includes(path)) {
        nuxt.options.css.push(path);
      }
    };
    
    pushUnique(heroCss);
    pushUnique(buttonCss);
  }
})
