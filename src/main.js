import Vue from 'vue';
import App from './App.vue';

// Bootstrap imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faTrash
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
