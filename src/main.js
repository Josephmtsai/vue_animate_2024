import { createApp } from 'vue';
import './style.css';
import 'primeicons/primeicons.css';
import App from './App.vue';
import { createPinia } from 'pinia';
const pinia = createPinia();
createApp(App).use(pinia).mount('#app');
