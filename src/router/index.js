import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/books',
      name: 'book',
      component: () => import('../views/BooksView.vue')
    },
    {
      path: '/book/:slug',
      name: 'single book',
      component: () => import('../views/BookSingle.vue')
    },
    {
      path: '/articles',
      name: 'articles book',
      component: () => import('../views/ArticlesView.vue')
    },
    {
      path: '/anons',
      name: 'anons',
      component: () => import('../views/AnonsView.vue')
    },
  ]
})

export default router
