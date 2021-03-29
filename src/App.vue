<template>
	<a-layout id="app">
		<a-layout-sider
		breakpoint="lg"
		collapsed-width="0"
		@collapse="onCollapse"
		@breakpoint="onBreakpoint">
			<div class="logo" />
			<a-menu theme="dark" mode="inline">
				<template v-for="(item, index) in menus">
					<a-sub-menu v-if="item.children" :key="'menu-' + index">
						<span slot="title">
							<span>{{item.name}}</span>
						</span>
						<a-menu-item v-for="(menu, index) in item.children" :key="'sub-menu-' + index"  @click="clickHandler(menu)">
							<!-- <a-icon type="user" /> -->
							<span class="nav-text">{{menu.name}}</span>
						</a-menu-item>
					</a-sub-menu>
					<a-menu-item v-else :key="'menu-' + index"  @click="clickHandler(item)">
						<!-- <a-icon type="user" /> -->
						<span class="nav-text">{{item.name}}</span>
					</a-menu-item>
				</template>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
			<a-layout-content>
				<div :style="{background: '#fff', minHeight: '360px', height: '100%' }">
					<router-view></router-view>
				</div>
			</a-layout-content>
			<!-- <a-layout-footer style="textAlign: center">
				Ant Design ©2018 Created by Ant UED
			</a-layout-footer> -->
		</a-layout>
	</a-layout>
</template>

<script>
export default {
	data() {
		return {
			menus: [
				{name: 'Reflection', children: [
					{name: 'Button', path: '/reflection/btn'},
					{name: 'Gallery', path: '/reflection/gallery'}
				]}
			]
		};
	},
	methods: {
		onCollapse(collapsed, type) {
			console.log(collapsed, type);
		},
		onBreakpoint(broken) {
			console.log(broken);
		},
		clickHandler(menu) {
			if(menu.path === this.$route.path) return;
			
			this.$router.push({
				path: menu.path
			});
		}
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
