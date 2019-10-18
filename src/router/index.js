import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Create from '../components/Create';

const router = new Router ({
    mode: 'history',
    base:'/vuex-practice',
    routes: [
        {
            path: '*',
            component: Create
        },
        {
            path: '/',
            name: 'Create',
            component: Create,  
        }
    ],
});



export default router;