import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LessonView from '../views/LessonView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/lesson/:id', name: 'Lesson', component: LessonView }
  ]
})

export default router