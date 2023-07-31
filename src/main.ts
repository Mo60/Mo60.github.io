import './main.postcss'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import { directive as variantwind } from 'variantwind'

// @ts-ignore: this is generated from voie, which TypeScript is not able to infer types correctly
import routes from '/@voie/pages'
// import icons data genereted by PurgeIcons
import '@purge-icons/generated'

import { registerComponents } from './components'
import App from './App.vue'
import { messages } from './messages'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const i18n = createI18n({
  locale: 'en',
  messages,
})

app.use(i18n)
app.use(router)
app.use(registerComponents)
app.directive('variantwind', variantwind)

app.mount('#app')
