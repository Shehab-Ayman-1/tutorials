<script setup>
import { ref } from "vue";
</script>

<template>
	<div class="home">
		<img src="@/assets/images/vue.svg" alt="vue" />
		<h1>Welcome To Vue.js Toturial</h1>
	</div>
</template>

<style scoped>
.home {
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
h1 {
	color: var(--primary);
	font-size: 2rem;
	margin-top: 80px;
}
img {
	width: 128px;
}
</style>
