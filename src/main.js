import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Axios from 'axios'

const app = createApp(App)
app.use(router)
// app.use(xios)
app.mount('#app')
