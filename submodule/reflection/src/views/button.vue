<template>
	<div class="content">
		<a href="javascript:void(0)" class="btn">Button</a>
		<a href="javascript:void(0)" class="btn btn1">Button</a>
		<a href="javascript:void(0)" class="btn btn2">Button</a>
		<a href="javascript:void(0)" class="btn btn3">Button</a>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Button'
	};
</script>

<style type="text/css" scoped="" lang="scss">
	.content {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		background: #000;
		width: 100%;
		height: 100%;
	}

	@keyframes rotate {
		100% {
			transform: translate(-50%, -50%) rotate(1turn);
		}
	}

	.btn {
		display: inline-block;
		text-decoration: none;
		width: 160px;
		height: 80px;
		line-height: 80px;
		border-radius: 8px;
		position: relative;
		font-size: 24px;
		text-align: center;
		overflow: hidden;
		z-index: 0;
		transition: 0.3s;
		-webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.4));

		&::before {
			content: "";
			display: inline-block;
			position: absolute;
			width: 150%;
			height: 300%;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: -2;
			background-repeat: no-repeat;
			background-size: 50% 50%;
			background-position: 0 0;
			background-image: conic-gradient(#0ebeff, #0ebeff);
			animation: rotate 2s linear infinite;
		}

		&::after {
			content: "";
			position: absolute;
			z-index: -1;
			top: 2px;
			left: 2px;
			width: calc(100% - 4px);
			height: calc(100% - 4px);
			background-color: #000;
			border-radius: 8px;
		}

		&:hover {
			box-shadow: 0 0 5px #0ebeff, 0 0 25px #0ebeff;
			color: #fff;

			&::after, &::before {
				transition: 0.3s;
				background: #0ebeff;
			}
		}

		&.btn1 {
			filter: hue-rotate(90deg);
		}

		&.btn2 {
			filter: hue-rotate(180deg);
		}

		&.btn3 {
			filter: hue-rotate(270deg);
		}
	}
</style>