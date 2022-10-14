import Holding from '../components/Pages/Holding.vue'
import Home from '../components/Pages/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Holding }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;