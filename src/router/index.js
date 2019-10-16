import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';
import ComponentC from '../components/ComponentC';
import ComponentD from '../components/ComponentD';

const router = new Router ({
    mode: 'history',
    base:'/vuex-practice',
    routes: [
        {
            path: '*',
            component: ComponentA
        },
        {
            path: '/',
            name: 'Create',
            component: ComponentA,  
        },
        {
            path: '/Read',
            name: 'Read',
            component: ComponentB,  
        },
        {
            path: '/Update',
            name: 'Update',
            component: ComponentC,  
        },
        {
            path: '/Delete',
            name: 'Delete',
            component: ComponentD,  
        },
    ],
});



export default router;