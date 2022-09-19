import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from 'axios'
axios.defaults.baseURL = 'https://grandhospital.pythonanywhere.com/en/api/v1/'
createApp(App).use(i18n).use(store).use(router).mount('#app')
