import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import FormgroupsList from './components/FormgroupsList.vue';
import AddFormGroup from './components/AddFormGroup.vue';
import FieldgroupCard from './components/FieldgroupCard.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/forms-list', component: FormgroupsList },
        { path: '/add-form-group', component: AddFormGroup},
        { path: '/fieldgroup-card/:id', component: FieldgroupCard},
    ]
});

const app = createApp(App);
app.use(router);

app.mount('#app');
