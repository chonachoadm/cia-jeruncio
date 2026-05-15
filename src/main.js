import './assets/main.css'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n.js'

createApp(App).use(i18n).mount('#app')
