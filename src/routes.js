import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AddEmployee from './components/AddEmployee.vue'
import EditEmployee from './components/EditEmployee.vue'


const routes= [
    {
        path: '',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/addemployee',
        name: 'AddEmployee',
        component: AddEmployee
    },
    {
        path: '/editemployee/:id?',
        name: 'EditEmployee',
        component: EditEmployee
    },
];
const router = createRouter({
     history: createWebHistory(),
     routes
})

export default router