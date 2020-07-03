import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/Dashboard.vue';


Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/izingiris',
			name: 'izingiris',
			component: () => import('./components/izin/izin-giris/index.vue')
		},
		{
			path: '/izinlist',
			name: 'izinlist',
			component: () => import('./components/izin/izin-list/index.vue')
		},
		{
			path: '/takvim',
			name: 'izintakvim',
			component: () => import('./components/izin/izin-takvim/index.vue')
		},
		{
			path: '/documentation',
			name: 'documentation',
			component: () => import('./components/Documentation.vue')
		},
		{
			path: '/izinhakedis',
			name: 'izinhakedis',
			component: () => import('./components/izin/izinhakedis/index.vue')
		},
		{
			path: '/personelgiris',
			name: 'personelgiris',
			component: () => import('./components/personel/personelgiris/index.vue')
		},
		{
			path: '/personellist',
			name: 'personellist',
			component: () => import('./components/personel/personellist/index.vue')
		},
	],
	scrollBehavior() {
		return {x: 0, y: 0};
	}
});