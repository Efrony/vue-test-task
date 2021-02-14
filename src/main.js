import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
