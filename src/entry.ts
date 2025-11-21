import type { App, Plugin } from 'vue'
import _TvHero from './components/TvHero.vue'
import './style.scss'

const TvHero = _TvHero as typeof _TvHero & Plugin;
TvHero.install = (app: App) => {
  app.component('TvHero', TvHero)
};

export { TvHero }

export const TvHeroPlugin: Plugin = {
  install: TvHero.install
};
export default TvHero;

declare module 'vue' {
  export interface GlobalComponents {
    TvHero: typeof TvHero;
  }
}
