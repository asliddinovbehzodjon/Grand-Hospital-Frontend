import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Main.vue')
  },
  {
    path: '/drug',
    name: 'drug',
    component: ()=>import('../components/Drugs.vue')
  },
  {
    path: '/drug-accept',
    name: 'drugaccept',
    component: ()=>import('../components/DrugAccept.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('../views/Register.vue')
  },
 
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/Login.vue')
  },
 
  {
    path: '/doctor-about/:id',
    name: 'doctor-about',
    component: ()=>import('../views/Doctor-Detail.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
