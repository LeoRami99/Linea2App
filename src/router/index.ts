import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginLinea from '../views/LoginLinea.vue'
import RegisterLinea from '../views/RegisterLinea.vue'
import InicioLinea from '../views/Inicio.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginLinea
  },
  {
    path: '/registro',
    name: 'Registro',
    component: RegisterLinea
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: InicioLinea
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
