import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/index.css';
// import BackButton from '@/components/BackButton';
// import Modal from '@/components/Modal';

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);

// app.component('refer-back-button', BackButton);
// app.component('refer-modal', Modal);

app.use(store);
app.use(router);
app.mount('#app');
