import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//traducciones
import { createI18n } from 'vue-i18n'

const app = createApp(App)

const i18n = createI18n({
    // something vue-i18n options here ...
  })
app.use(router)

//Traducciones
app.use(i18n)


app.mount('#app')
