import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: App },
        // { path: ''}
    ]
});

const app = createApp(App);
app.use(router);

app.mount('#app');
