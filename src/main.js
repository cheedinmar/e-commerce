import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '../src/style.css'
import '../src/main.css'
import Router from './router'

createApp(App).use(Router).mount('#app')
