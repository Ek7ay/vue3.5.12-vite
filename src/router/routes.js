import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/', 
    redirect: '/themes' 
  },
  { 
    path: '/themes',
    component: () => import('@/views/themes/index.vue'), 
  },
  {
    path: '/drawing',
    component: () => import('@/views/drawing-board/index.vue'),

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router