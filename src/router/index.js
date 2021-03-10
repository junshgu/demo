import __$reflectionRoutes from '../../submodule/reflection/src/router/routes.js'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	...__$reflectionRoutes,
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
