export default [
	{
		path: '/reflection/btn',
		component: () => import('../views/button.vue'),
		meta: {
			title: 'Button'
		}
	},
	{
		path: '/reflection/gallery',
		component: () => import('../views/gallery.vue'),
		meta: {
			title: 'Gallery'
		}
	}
];