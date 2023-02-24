import { RouteRecordRaw } from 'vue-router';
const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const Table = () => import('@/views/Table.vue');

const Dashboard = () => import('@/views/Dashboard.vue');


export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },

    {
        path: '/table',
        name: 'table',
        component: Table
    },
    {
        path: '/data',
        name: 'data',
        component: Dashboard
    },

]