import { createWebHashHistory, createRouter } from 'vue-router'
import Drawing from '@/views/drawing-board/index.vue'

const routes = [
  { 
    path: '/',
    component: () => import('@/views/themes/index.vue'), 
  },
  {
    path: '/drawing',
    component: Drawing,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router