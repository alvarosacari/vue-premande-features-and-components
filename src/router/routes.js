const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/PageHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/PageAbout.vue')
  }
]

export default routes
