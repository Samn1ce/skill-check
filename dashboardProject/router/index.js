import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Payments from '@/views/payments.vue'
import Dashboard from '@/views/dashboard.vue'
import Customers from '@/views/customers.vue'
import Tickets from '@/views/tickets.vue'
import Connections from '@/views/connections.vue'
import automation from '@/views/automation.vue'
import workflow from '@/views/workflow.vue'

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
        {
            path: "/automation",
            name: "automation",
            component: automation
        },
        {
            path: "/connections",
            name: "connections",
            component: Connections
        },
        {
            path: "/workflow",
            name: "workflow",
            component: workflow
        },
    ]
})

export default router