import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './Views/Dashboard.vue'
import Projects from './Views/Projects.vue'
import Team from './Views/Team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }

  ]
})

// const routes = [
//     { path: '/', component: Dashboard ,name:'dashboard'},
//     { path: '/Projects', component: Projects ,name:'Projects' },
//     { path: '/Team', component: Team ,name:'Team' },
//   ]
  
//   var router = new Router({
//       routes: routes
//   });
  
//   export {
//       router
//   }