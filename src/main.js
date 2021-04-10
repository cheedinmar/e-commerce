import Vue from 'vue';
import App from './App.vue';
import './index.css';
import '../src/style.css';
import '../src/main.css';
import Router from './router';
import {store} from './store';



new Vue({
    Router,
    store,
    el: '#app',
    render: h=>(App)
})

// createApp(App).use(Router).mount('#app')
 