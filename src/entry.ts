import TvHero from './components/TvHero.vue'

(TvHero as any).install = (app: any) => {
  app.component('TvHero', TvHero)
};

export const TvHeroPlugin = {
  install(app: any) {
    app.component('TvHero', TvHero)
  }
}

export { TvHero }
export default TvHero
