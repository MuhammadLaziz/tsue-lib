import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from "vue-i18n";
import uz from './languages/uz.json';
import en from './languages/en.json';
import ru from './languages/ru.json';
import './assets/main.css'
import VueClickAway from "vue3-click-away";

const app = createApp(App)
// import VueI18n from 'vue-i18n'

// app.use(VueI18n)
app.use(VueClickAway)
app.use(router)

const locale = localStorage.getItem("locale") || "uz";
const i18n = createI18n({
    locale: locale,
    legacy: false,
    globalInjection: true,
    silentFallbackWarn: true,
    compositionOnly: false,
    messages: {
        uz,
        ru,
        en
    },
});
app.use(i18n);

app.mount('#app')
