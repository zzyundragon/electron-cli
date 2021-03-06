import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import i18n from '@/lang'
Vue.config.productionTip = false
// Vue.use(ViewUI)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
