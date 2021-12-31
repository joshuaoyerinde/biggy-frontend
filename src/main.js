import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueCookies from 'vue-cookies';
// import Axios from 'axios'

const app = createApp(App)
app.use(router)
app.mount('#app')
// app.use(Axios)
