import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Create from '../components/Create';
import Read from '../components/Read';
import Update from '../components/Update';
import Delete from '../components/Delete';

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
        },
        {
            path: '/Read',
            name: 'Read',
            component: Read,  
        },
        {
            path: '/Update',
            name: 'Update',
            component: Update,  
        },
        {
            path: '/Delete',
            name: 'Delete',
            component: Delete,  
        },
    ],
});



export default router;