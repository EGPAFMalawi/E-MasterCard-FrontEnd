import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MasterCardsHome from "./components/MasterCards/MasterCardsHome";
import AddPatient from "./components/Patients/AddPatient";
import ShowPatient from "./components/Patients/ShowPatient";

Vue.use(Router);

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/patients/add',
            name: 'AddPatient',
            component: AddPatient
        },
        {
            path: '/patients/show',
            name: 'ShowPatient',
            component: ShowPatient
        },
        {
            path: '/patients/show/card',
            name: 'MasterCardsHome',
            component: MasterCardsHome
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

export default router;
