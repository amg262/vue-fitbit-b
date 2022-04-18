import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss'; // npm install node-sass
import {BootstrapVue} from "bootstrap-vue";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {firebase} from "@/firebase";

Vue.use(BootstrapVue)
createApp(App).mount('#app')
