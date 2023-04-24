import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'LittleLives',
		},
	},
	{
		path: '/albums/:id',
		name: 'AlbumDetail',
		component: () =>
			import('../views/AlbumDetail.vue'),
		meta: {
			title: 'LittleLives - Album Detail',
		},
	},
	{
		path: '/albums',
		name: 'Albums',
		component: () =>
			import('../views/Album.vue'),
		meta: {
			title: 'LittleLives - Album',
		},
	},
	{
		path: '/media',
		name: 'Projects',
		component: () =>
			import('../views/Media.vue'),
		meta: {
			title: 'LittleLives - Media',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;
