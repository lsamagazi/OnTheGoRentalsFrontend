import { createRouter, createWebHistory } from 'vue-router';
import AdminPage from "@/components/Admin/AdminPage.vue";
import ConfirmationModal from "@/components/Main/Modals/ConfirmationModal.vue";
import adminRoutes from './adminRoutes';
import adminCarRoutes from './adminCarRoutes';
import adminUserRoutes from './adminUserRoutes';
import navRoutes from './navRoutes';
import CarList from "@/components/Car/CarList.vue";
import Home from "@/components/Main/Home.vue";
import carRoutes from './carRoutes';
import UserProfile from "@/components/Main/UserProfile.vue";
import Test from "@/components/Main/TestPage.vue";
import TestPage from "@/components/Main/TestPage.vue";
import adminRentalRoutes from "@/router/adminRentalRoutes";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...navRoutes,
       ...carRoutes,
        {
            path: '/',
            name: 'Home',
            component: Home,
        },


        {
            path: '/cars/list/:category',
            name: 'CarList',
            component: CarList,
        },
        {
            path: '/user/profile/:id',
            name: 'UserProfile',
            component: UserProfile,
        },
        {
            path: '/admin',
            component: AdminPage,
            children: [
                ...adminRoutes,
                ...adminCarRoutes,
                ...adminUserRoutes,
                ...adminRentalRoutes
            ],
        },


        {
            path: '/error',
            component: () => import('@/components/Main/ErrorPage.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'ErrorPage',
            component: () => import('@/components/Main/ErrorPage.vue'),
        },
    ],
});

export default router;
