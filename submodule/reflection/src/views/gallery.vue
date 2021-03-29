<template>
	<div class="content">
		<!-- 舞台层 -->
		<div class="stage">
			<!-- 控制层 -->
			<div class="control">
				<!-- 图片层 -->
				<div class="img-wrap">
					<div :class="['img', 'img-' + (index + 1)]" :key="'img-' + index" v-for="(img, index) in imgList">
						<img src="" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Gallery',
		data() {
			return {
				imgList: [
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{}
				]
			}
		}
	};
</script>

<style type="text/css" scoped="" lang="scss">
	.content {
		width: 100%;
		height: 100%;
		background: #000;
		display: flex;
		justify-content: center;
		align-items: center;
	}
		@keyframes rotate{
			0%{
				transform: translateZ(-2000px) rotateY(0deg);
			}
			50%{
				transform: translateZ(-2000px) rotateY(-360deg);
			}
			100%{
				transform: translateZ(-2000px) rotateY(-720deg);
			}
		}

	.stage {
		position: relative;
		width: 800px;
		height: 240px;
		perspective: 2000px;
		transform-style: preserve-3d;

		.control {
			position: relative;
			width: 100%;
			height: 100%;
			transform-style: preserve-3d;
			transform: translateZ(-2000px) rotateY(50deg) rotateZ(0deg);
			animation:rotate 30s linear infinite;

			.img-wrap {
				position: absolute;
				width: 400px;
				height: 400px;
				top:50%;
				left:50%;
				transform:translate(-50%, -50%);
				transform-style: preserve-3d;

				.img {
					position:absolute;
					width:500px;
					height:400px;
					line-height:400px;
					text-align:center;
					font-size:120px;
					top:0;
					left:0;
					transform-style: preserve-3d;
					transform-origin: 50% 50% 0px;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}

					&.img-1 {
						transform: rotateY(35 + 1 * 45deg) translateZ(650px);
					}

					&.img-2 {
						transform: rotateY(35 + 2 * 45deg) translateZ(650px);
					}

					&.img-3 {
						transform: rotateY(35 + 3 * 45deg) translateZ(650px);
					}

					&.img-4 {
						transform: rotateY(35 + 4 * 45deg) translateZ(650px);
					}

					&.img-5 {
						transform: rotateY(35 + 5 * 45deg) translateZ(650px);
					}

					&.img-6 {
						transform: rotateY(35 + 6 * 45deg) translateZ(650px);
					}

					&.img-7 {
						transform: rotateY(35 + 7 * 45deg) translateZ(650px);
					}

					&.img-8 {
						transform: rotateY(35 + 8 * 45deg) translateZ(650px);
					}
				}
			}
		}
	}
</style>