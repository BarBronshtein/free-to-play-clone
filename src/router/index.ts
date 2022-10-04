import { createRouter, createWebHashHistory } from 'vue-router';
import gameApp from '../views/game-app.vue';
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: gameApp,
		},
		{
			path: '/details/:id',
			name: 'game-details',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/game-details.vue'),
		},
	],
});

export default router;
