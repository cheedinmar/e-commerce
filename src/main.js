import  {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import '../src/style.css';
import '../src/main.css';
import Router from './router';
import { store } from './store';

 

const app = createApp(App);
app.use(Router);
app.use(store);
app.mount('#app');



// new Vue({
//     Router,
//     store,
//     el: '#app',
//     render: h=>(App)
// })

// createApp(App).use(Router).mount('#app')
 