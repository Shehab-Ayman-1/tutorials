<script setup>
import { ref } from "vue";

const cssText = `background: var(--secondary); color: var(--primary); font-size: 16px; font-weight: bold; padding: 10px; border-radius: 10px; line-height: 1`;
const data = ["shehab", "hesham", "aya", "salma"];
</script>

<template>
	<p v-bold>Bold</p>

	<p v-bold v-gradientText>GradientText</p>

	<p v-style.primary.bold.bgSize>Modifires</p>

	<div class="v-loop-on" v-loopOn="{ cssText, data, tagName: 'p', seperator: ' | ' }" />
</template>

<style lang="scss" scoped>
.v-loop-on {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
}
</style>
