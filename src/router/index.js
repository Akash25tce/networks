import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LessonView from '../views/LessonView.vue'
import Support from '../views/Support.vue' // NEW: Import the support page

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/lesson/:id', name: 'Lesson', component: LessonView },
    { path: '/support', name: 'Support', component: Support } // NEW: Add the route
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router