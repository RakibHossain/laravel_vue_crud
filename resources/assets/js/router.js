import Vue 		 from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import CompaniesIndex  from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit   from './components/companies/CompaniesEdit.vue';

const router = new VueRouter({
	routes: [
	    { path: '/', component: CompaniesIndex, name: 'companies' },
	    { path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany' },
	    { path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany' },
	]
});

export default router;
