import { createApp } from 'vue'
import App from './App.vue'
import  Bootstrap from 'bootstrap';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
// Import BootstrapVue CSS (if needed)
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);

// Use BootstrapVue
app.use(Bootstrap);

// Mount the app to the specified element in your HTML file
app.mount('#app');