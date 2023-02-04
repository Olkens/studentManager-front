import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

import './assets/main.css'

axios.defaults.baseURL = 'https://localhost:8080/api/'

// const instance = axios.create({
//     baseURL: 'https://localhost:8080/api/',
//   });

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
