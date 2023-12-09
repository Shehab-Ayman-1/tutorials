<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({ title: String, count: Number });
</script>

<template>
	<h3 class="primary-text">{{ props.title }}</h3>

	<button class="btn" @click="$emit('increament', 3)">+ 3</button>
	<span style="color: orange">{{ props.count }}</span>
	<button class="btn" @click="$emit('decreament', 2)">- 2</button>
</template>

<style scoped>
.primary-text {
	color: var(--primary);
}
</style>
