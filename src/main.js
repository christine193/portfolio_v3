import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';


Vue.use(VueRouter);

import Home from './components/Home.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';


const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Skills', path: '/skills', component: Skills },
  { name: 'Portfolio', path: '/portfolio', component: Portfolio },
  { name: 'Contact', path: '/contact', component: Contact }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,


});

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router, routes
}).$mount('#app')

