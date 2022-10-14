import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Holding from './components/Pages/Holding.vue'
import Home from './components/Pages/Home.vue'
import store from './settings/store'
import router from './settings/router'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')