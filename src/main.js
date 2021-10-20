import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import $ from 'jquery'

window.axios =  axios;

createApp(App).use(router).mount('#app')
