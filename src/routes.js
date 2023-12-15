import { createWebHistory,createRouter } from "vue-router";
import Home from './components/sections/section13/Home.vue'
import About from './components/sections/section13/About.vue'
import Contact from './components/sections/section13/Contact.vue'




const routes=[{
    
        name:'Home',
        path:'/',
        component:Home
    
},{
    
    name:'About',
    path:'/about',
    component:About

},
{
    
    name:'Contact',
    path:'/contact',
    component:Contact

}];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;