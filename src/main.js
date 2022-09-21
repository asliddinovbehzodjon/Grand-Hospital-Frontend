import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/en/api/v1/'
createApp(App).use(i18n).use(store).use(router).mount('#app')
