import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reports from './views/Reports.vue'
import MasterCardsHome from "./components/MasterCards/MasterCardsHome";
import AddPatient from "./components/Patients/AddPatient";
import ShowPatient from "./components/Patients/ShowPatient";
import LoginPage from "./views/LoginPage";
import Steps from './components/Steps/Steps'
import HTS from './components/HTS'
import Settings from './components/Settings'
import Facility from './components/Settings/facility'

Vue.use(Router);

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            beforeEnter: (to, from, next) => {
                if (sessionStorage.getItem('auth')) {
                    next('/');
                }
                next();
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/reports',
            name: 'reports',
            component: Reports,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/steps',
            name: 'steps',
            component: Steps,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/hts-records',
            name: 'hts-records',
            component: HTS,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/users',
            name: 'users',
            component: Settings,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/facilities',
            name: 'facilities',
            component: Facility,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/patients/add',
            name: 'AddPatient',
            component: AddPatient,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/patients/show',
            name: 'ShowPatient',
            component: ShowPatient,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/patients/show/card',
            name: 'MasterCardsHome',
            component: MasterCardsHome,
            meta: {
                requiresAuth: true
            }
        },
        // {
        //     path: '/master-card/v7',
        //     name: 'MasterCardV7',
        //     component: MasterCardV7
        // },
        // {
        //     path: '/master-cards/v6',
        //     name: 'MasterCardV6',
        //     component: MasterCardV6
        // }
    ]
});

router.beforeEach((to, from, next)=>{
    if (to.meta.requiresAuth)
    {
        if (sessionStorage.getItem('auth'))
        {
            next();
        }else
        {
            next({ path : '/login'})
        }
    }else
    {
        next();
    }

});

export default router;
