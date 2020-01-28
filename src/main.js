import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';



Vue.use(VueRouter);


import Home from './components/Home.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';


const routes = [

  { path: "/", component: Home },
  { name: 'about', path: '/about', component: About },
  { name: 'portfolio', path: '/portfolio', component: Portfolio },
  { name: 'contact', path: '/contact', component: Contact }
];

const router = new VueRouter({
  mode: 'history',

  exactActiveClass: 'is-active',

  routes: routes,
});

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router, routes
}).$mount('#app')

