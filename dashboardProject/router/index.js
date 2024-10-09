import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Payments from '@/views/payments.vue'
import Dashboard from '@/views/dashboard.vue'
import Customers from '@/views/customers.vue'
import Tickets from '@/views/tickets.vue'
import Connections from '@/views/connections.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: App,
        },
        {
            path: "/payments",
            name: "payments",
            component: Payments
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/tickets",
            name: "tickets",
            component: Tickets
        },
        {
            path: "/customers",
            name: "customers",
            component: Customers
        },
        // {
        //     path: "/automation",
        //     name: "automation",
        //     component: Automation
        // },
        // {
        //     path: "/connections",
        //     name: "connections",
        //     component: Connections
        // },
        // {
        //     path: "/workflow",
        //     name: "workflow",
        //     component: Workflow
        // },
    ]
})

export default router