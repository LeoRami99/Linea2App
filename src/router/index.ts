import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import LoginLinea from '../views/LoginLinea.vue'
import RegisterLinea from '../views/RegisterLinea.vue'
import InicioLinea from '../views/Inicio.vue'
import UbicacionApp from '../views/Ubicacion.vue'
import RestApp from '../views/RestApp.vue'

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
  },
  {
    path: '/ubicacion',
    name: 'Ubicacion',
    component: UbicacionApp
  },
  {
    path: '/restapp',
    name: 'Restapp',
    component: RestApp
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
