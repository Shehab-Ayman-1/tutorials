<script setup>
import { computed, ref } from "vue";

const path = ref("");

const slug = computed(() => {
	const text = path.value.trim().toLowerCase();
	return text.replaceAll(" ", "-").replaceAll("&", "and");
});
</script>

<template>
	<div class="">
		<input class="field" type="text" v-model="path" placeholder="Enter page..." />
		<p v-show="slug">https://shehab-ayman.netlify.app/{{ slug }}</p>
	</div>
</template>

<style lang="scss" scoped>
div {
	max-width: 600px;
	width: 100%;
	margin: auto;
	p {
		background: #3f3f3f;
		padding: 20px;
		margin-top: 10px;
		border-radius: 10px;
	}
}
</style>
