import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvHero from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvHero)
app.component('TvDemo', TvDemo)
app.mount('#tv-hero')
