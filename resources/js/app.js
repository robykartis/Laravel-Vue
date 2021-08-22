
require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
//import library yang digunakan vue
import VueRouter from 'vue-router'

//Router Vue 
Vue.use(VueRouter)
let routes =[
    {path:'/data-user', component:require('./components/pengguna/Data-pengguna.vue').default},
    {path:'/data-level', component:require('./components/pengguna/Data-level.vue').default}
]
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const router = new VueRouter({
   mode: 'history',
    routes
})


const app = new Vue({
    el: '#app',
    router
});
