import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/Home.vue';
import AboutPage from './views/About.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/about', component: AboutPage}
    ]
});
