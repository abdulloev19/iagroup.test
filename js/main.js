import { header } from './header.js';
import { indexPage } from './indexPage.js';
import { Projects } from './Projects.js';
import { services } from './services.js';
import { smsbox } from './smsbox.js'
 

const aboutСompany = { template: '<h2>О компании</h2>' }
const approachToWork = { template: '<h2>Подход к работе</h2>' }
const сlients = { template: '<h2>Клиенты</h2>' }
const routes = [
  { path: '/iagroup.test', component: indexPage },
  { path: '/aboutcompany', component: aboutСompany },
  { path: '/сlients', component: сlients },
  { path: '/services', component: services },
  { path: '/projects', component: Projects },
  { path: '/approachtowork', component: approachToWork }
];

const router = VueRouter.createRouter({
  // предоставляем реализацию истории посещений
  history: VueRouter.createWebHistory(),
  routes,
});

const iagroup = Vue.createApp({
  data() {
    return {
    }
  },
  methods: {

    },
  components: {
    // "index-page": indexPage,
    "header-top": header,
    "smsbox": smsbox
  }
});
iagroup.use(router);
iagroup.mount("#iagroup");

