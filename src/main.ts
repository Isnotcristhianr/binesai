import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//marquee
import Vue3Marquee from "vue3-marquee";

//traducciones
import { createI18n } from "vue-i18n";
//Traducciones
import es from "../locales/es.json";
import en from "../locales/en.json";

const i18n = createI18n({
  legacy: false,
  locale: "es", // Idioma por defecto
  fallbackLocale: "en",
  messages: {
    es,
    en,
  },
});

const app = createApp(App);
app.use(router);

//marquee
app.use(Vue3Marquee);

//Traducciones
app.use(i18n);

app.mount("#app");
