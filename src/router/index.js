import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'index', // 首页
      path: '/',
      component: () => import('../pages/index')
    }
  ]
});
