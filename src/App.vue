<template>
	<a-layout id="app">
		<a-layout-sider
		breakpoint="lg"
		collapsed-width="0"
		@collapse="onCollapse"
		@breakpoint="onBreakpoint">
			<div class="logo" />
			<a-menu theme="dark" mode="inline" :default-selected-keys="defaultSelectedKeys">
				<a-menu-item :key="item.key" v-for="item in menus">
					<!-- <a-icon type="user" /> -->
					<span class="nav-text">{{item.name}}</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
			<a-layout-content :style="{ margin: '0 16px' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px', height: '100%' }">
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
				{name: 'reflection', key: 'reflection', way: '__$AutoInserter'},
			]
		};
	},
	computed: {
		defaultSelectedKeys() {
			return [this.menus[0].key];
		}
	},
	methods: {
		onCollapse(collapsed, type) {
			console.log(collapsed, type);
		},
		onBreakpoint(broken) {
			console.log(broken);
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
