import Vue from 'vue';
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Form',
        component: Form,
    },
    {
        path: '/success',
        name: 'Success',
        component: () => import('../views/Success.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
