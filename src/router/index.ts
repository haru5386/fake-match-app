import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MatchView from '../views/MatchView.vue'
import ChatView from '../views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/match',
      name: 'match',
      component: MatchView,
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
    },

  ],
})

export default router
