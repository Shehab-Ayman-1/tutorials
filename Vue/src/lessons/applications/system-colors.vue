<script setup>
import { ref, watchEffect } from "vue";

const primaryColor = ref("#ffeb3b");
const colors = ["#ffeb3b", "#ff9800", "#ff5722", "#e91e63", "#009688", "#2196f3", "#8bc34a"];

watchEffect(() => {
	document.body.setAttribute("style", `--main-color: ${primaryColor.value}`);
});
</script>

<template>
	<ul>
		<li v-for="(color, i) in colors" :key="color" :class="{ color, active: color === primaryColor }" @click="primaryColor = color">{{ i + 1 }} -- {{ color }}</li>
	</ul>

	<p class="block">Block 1</p>

	<p class="block">Block 2</p>

	<p class="block">Block 3</p>

	<p class="block">Block 4</p>

	<p class="block">Block 5</p>
</template>

<style lang="scss" scoped>
ul {
	list-style: none;
}
li {
	width: fit-content;
	cursor: pointer;
	opacity: 0.5;
	&:hover {
		opacity: 0.8;
	}
	&.active {
		opacity: 1;
	}
	&:nth-child(1) {
		color: #ffeb3b;
	}
	&:nth-child(2) {
		color: #ff9800;
	}
	&:nth-child(3) {
		color: #ff5722;
	}
	&:nth-child(4) {
		color: #e91e63;
	}
	&:nth-child(5) {
		color: #009688;
	}
	&:nth-child(6) {
		color: #2196f3;
	}
	&:nth-child(7) {
		color: #8bc34a;
	}
}
.block {
	background: var(--main-color);
	color: black;
	padding: 10px;
	margin: 10px;
	font-size: 1rem;
	display: inline-block;
	border-radius: 10px;
	box-shadow: 0 0 20px 5px black;
}
</style>
