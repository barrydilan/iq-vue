import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        navbar: () => import("@/components/NavbarComponent.vue"),
        // footer: () => import("@/components/FooterComponent.vue"),
      }
    },
  ]
})

export default router
