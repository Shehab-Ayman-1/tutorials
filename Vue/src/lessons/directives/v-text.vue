<script setup>
import { ref } from "vue";

const name = ref("shehab");
</script>

<template>
	<div class="flex-start">
		<h3>Name:</h3>
		<p v-text="name"></p>
	</div>

	<div class="flex-start">
		<h3>Age:</h3>
		<p v-html="h3"></p>
	</div>
</template>

<style scoped>
h1 {
	font-size: 2rem;
	color: white;
}
p {
	color: white;
}
</style>
