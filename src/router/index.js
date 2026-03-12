import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LessonView from '../views/LessonView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/lesson/:id', name: 'Lesson', component: LessonView }
  ],
  // This is the function that ensures scrolling to the top on page change
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' } // smooth scrolling for a nice effect
    }
  }
})

export default router