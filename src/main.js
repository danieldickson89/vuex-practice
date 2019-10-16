import Vue from 'vue';
import App from './App.vue';

// Bootstrap imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Vuex store import
import store from './store';

// Router import
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
