import { createRouter, createWebHashHistory } from 'vue-router'
import VulnList from '../views/VulnList.vue'
import VulnDetail from '../views/VulnDetail.vue'
import WikiList from '../views/WikiList.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/vuln' },
  { path: '/vuln', name: 'VulnList', component: VulnList },
  { path: '/vuln/page/:page', name: 'VulnListPaged', component: VulnList },
  { path: '/vuln/detail/:id', name: 'VulnDetail', component: VulnDetail },
  { path: '/wiki', name: 'WikiList', component: WikiList },
  { path: '/wiki/page/:page', name: 'WikiListPaged', component: WikiList },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
