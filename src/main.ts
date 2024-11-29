import "./assets/main.css";

import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
//marquee
import Vue3Marquee from "vue3-marquee";

//traducciones
import { createI18n } from "vue-i18n";
//Traducciones
import es from "../locales/es.json";
import en from "../locales/en.json";
import { fa } from "vuetify/locale";

const i18n = createI18n({
  legacy: false,
  locale: "es", // Idioma por defecto
  fallbackLocale: "en",
  messages: {
    es,
    en,
  },
});

 const vuetify = createVuetify({
  components,
  directives,
  theme: false,
}); 
const app = createApp(App);
app.use(router);

//marquee
app.use(Vue3Marquee);

//Traducciones
app.use(i18n);

//Vuetify
app.use(vuetify);

// Registrar componentes de forma diferida si son grandes
app.component('LargeComponent', defineAsyncComponent(() => 
  import('./components/main/hero/hero.vue')
));

app.mount("#app");
