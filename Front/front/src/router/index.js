
import {createRouter, createWebHistory} from 'vue-router'
import HomeText from "@/components/home/HomeContent.vue";
import CreateComponent from "@/components/create/CreateComponent.vue";
import AlignmentComponent from "@/components/alignment/AlignmentComponent.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeText
        },
        {
            path:'/Create',
            name:'create',
            component:CreateComponent
        },
        {
            path:'/Alignment/:item',
            name:'alignment',
            component: AlignmentComponent,
            props: true
        }
    ]
})

export default router
