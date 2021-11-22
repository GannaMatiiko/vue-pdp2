import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import FormgroupsList from './components/FormgroupsList.vue';
import AddFormGroup from './components/AddFormGroup.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/forms-list', component: FormgroupsList },
        { path: '/add-form-group', component: AddFormGroup}
    ]
});

const app = createApp(App);
app.use(router);

app.mount('#app');
