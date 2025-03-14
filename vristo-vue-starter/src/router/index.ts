import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

import HomeView from '../views/index.vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/', name: 'home', component: HomeView },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/login.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/clients',
        name: 'clients',
        component: () => import('../views/clients.vue'),
    },
    {
        path: '/clientSettings',
        name: 'clientSettings',
        component: () => import('../views/users/clientSettings.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/users/profile.vue'),
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
        path: '/scrumboard',
        name: 'scrumboard',
        component: () => import('../views/scrumboard.vue'),
    },
    {
        path: '/invoice/list',
        name: 'invoiceList',
        component: () => import('../views/invoice/list.vue'),
    },
    {
        path: '/invoice/preview',
        name: 'invoicePreview',
        component: () => import('../views/invoice/preview.vue'),
    },
    {
        path: '/invoice/add',
        name: 'invoiceAdd',
        component: () => import('../views/invoice/add.vue'),
    },
    {
        path: '/invoice/edit',
        name: 'invoiceEdit',
        component: () => import('../views/invoice/edit.vue'),
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
