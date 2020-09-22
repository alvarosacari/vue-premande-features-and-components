import Vue from 'vue'
import vuetify from '@/plugins/vuetify.js'
import router from '@/router/index.js'
import store from '@/store/index.js'
import App from '@/App.vue'
import '@/registerServiceWorker.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
