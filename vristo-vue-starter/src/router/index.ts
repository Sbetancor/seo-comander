import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

import HomeView from '../views/index.vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/', name: 'home', component: HomeView },
   
    {
        path: '/clients',
        name: 'clients',
        component: () => import('../views/clients.vue'),
    },
    {
        path: '/newClient',
        name: 'client',
        component: () => import('../views/newClient.vue'),
    },
    {
        path: '/roadmap',
        name: 'roadmap',
        component: () => import('../views/roadmap.vue'),
    },
    {
        path: '/roadmapTask/:id',
        name: 'roadmapTask',
        component: () => import('../views/roadmapTasks.vue'),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../views/projects.vue'),
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: () => import('../views/tasks.vue'),
    },
    {
        path: '/tickets',
        name: 'tickets',
        component: () => import('../views/tickets.vue'),
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('../views/calendar.vue'),
    },
  
    
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const store = useAppStore();

    if (to?.meta?.layout == 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    next(true);
});
router.afterEach((to, from, next) => {
    appSetting.changeAnimation();
});
export default router;
