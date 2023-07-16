import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


/*
Font awesome css
*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*
Bootstrap css, JS
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faTrashAlt)
createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).use(store).use(VueToast).use(router).mount('#app')

// createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')