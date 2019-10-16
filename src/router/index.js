import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';
import ComponentC from '../components/ComponentC';

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
            name: 'ComponentA',
            component: ComponentA,  
        },
        {
            path: '/ComponentB',
            name: 'ComponentB',
            component: ComponentB,  
        },
        {
            path: '/ComponentC',
            name: 'ComponentC',
            component: ComponentC,  
        },
    ],
});



export default router;