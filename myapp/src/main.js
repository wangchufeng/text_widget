import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from "./router"
import VueDragResize from  'vue-drag-resize' 



Vue.component('vue-drag-resize', VueDragResize)
Vue.config.productionTip = false
// Vue.use(router)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

