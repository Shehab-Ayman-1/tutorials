<script setup>
import { computed, ref } from "vue";

const images = [
	"/src/assets/images/img-1.jpeg",
	"/src/assets/images/img-2.jpeg",
	"/src/assets/images/img-3.jpeg",
	"/src/assets/images/img-4.jpeg",
	"/src/assets/images/img-5.jpg",
	"/src/assets/images/img-6.jpeg",
];

const randomNumber = () => {
	const random = Math.random();
	return Math.floor(random * images.length);
};

const src = ref(images[randomNumber()]);
</script>

<template>
	<div class="">
		<button class="btn" @click="src = images[randomNumber()]">Change</button>
		<img :src="src" alt="random-img" />
	</div>
</template>

<style lang="scss" scoped>
div {
	width: 500px;
	height: 500px;
	margin: auto;
	.btn {
		width: 100%;
		margin: 0;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
}
</style>
