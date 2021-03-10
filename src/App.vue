<template>
	<a-layout id="app">
		<a-layout-sider
		breakpoint="lg"
		collapsed-width="0"
		@collapse="onCollapse"
		@breakpoint="onBreakpoint">
			<div class="logo" />
			<a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
				<a-menu-item key="1">
					<a-icon type="user" />
					<span class="nav-text">nav 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<a-icon type="video-camera" />
					<span class="nav-text">nav 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<a-icon type="upload" />
					<span class="nav-text">nav 3</span>
				</a-menu-item>
				<a-menu-item key="4">
					<a-icon type="user" />
					<span class="nav-text">nav 4</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-content :style="{ margin: '0 16px' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px', height: '100%'}">
					<router-view></router-view>
				</div>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
export default {
	data() {
		return {
			menus: [
				{name: reflection, key: reflection, way: __$AutoInserter},
				
			]
		};
	},
	methods: {
		onCollapse(collapsed, type) {
			console.log(collapsed, type);
		},
		onBreakpoint(broken) {
			console.log(broken);
		}
	}
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
	background: rgba(255, 255, 255, 0.2);
}
</style>
