import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/login',
      name:'login',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }
  ]
})
// router.beforeEach(async (to) => {
//   const publicPages = ['/login']
//   const authRequired = !publicPages.includes(to.path)

//   if(authRequired){
//     return '/login';
//   }
// })
export default router
