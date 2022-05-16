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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/components',
      name: 'components-view',
      component: () => import('../views/ComponentsView.vue')
    },
    {
      path: '/about',
      name: 'about-view',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact-view',
      component: () => import('../views/ContactView.vue')
    },
    // components
    {
      path: '/buttons',
      name: 'buttons-view',
      component: () => import('../views/ComponentViews/Buttons/index.vue')
    },
    {
      path: '/code-box',
      name: 'code-box',
      component: () => import('../views/ComponentViews/CodeBox/index.vue')
    },
    // how to
    {
      path: '/signature',
      name: 'signature-view',
      component: () => import('../views/HowToViews/Signature/index.vue')
    },
    {
      path: '/atomic-css',
      name: 'atomic-css-view',
      component: () => import('../views/HowToViews/AtomicCss/index.vue')
    },
  ]
})

export default router
