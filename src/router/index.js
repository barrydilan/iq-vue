import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        navbar: () => import("@/components/NavbarComponent.vue"),
      }
    },
    {
      path: '/quiz',
      name: 'quiz',
      components: {
        default: QuizView,
        navbar: () => import("@/components/NavbarComponent.vue"),
      }
    },
  ]
})

export default router
