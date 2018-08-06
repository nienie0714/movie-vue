const router = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/pages/index')
  },
  {
    name: 'location',
    path: '/location',
    component: () => import('@/pages/index')
  },
  {
    path: '/',
    redirect: '/index'
  }
];

export default router;
