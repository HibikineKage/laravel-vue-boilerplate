import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from './components/Hello.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: Hello,
  },
];
const router = new VueRouter({ mode: 'history', routes });
export default router;
