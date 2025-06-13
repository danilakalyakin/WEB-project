import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../components/IndexPage.vue'
import InformatikaPage from '../components/InformatikaPage.vue'
import MathematikaPage from '../components/MathematikaPage.vue'
import FizikaPage from '../components/FizikaPage.vue'

const routes = [
  { path: '/', name: 'Home', component: IndexPage },
  { path: '/informatika', component: InformatikaPage },
  { path: '/mathematika', component: MathematikaPage },
  { path: '/fizika', component: FizikaPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
