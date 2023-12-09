<script setup>
import { ref } from "vue";
import Child from "@/components/basics/child.vue";

const primary = ref(true);
const counter = ref(0);

const increament = (num) => {
	counter.value += num;
};

const decreament = (num) => {
	counter.value -= num;
};
</script>

<template>
	<div class="parent">
		<h3 :class="primary ? 'primary-text' : ''">Parent Component</h3>

		<button class="btn" @click="counter++">+ 1</button>
		<span style="color: orange">{{ counter }}</span>
		<button class="btn" @click="counter--">- 1</button>
	</div>
	<div class="child">
		<Child title="Child Component" :count="counter" @increament="increament" @decreament="decreament" />
	</div>
</template>

<style scoped>
.primary-text {
	color: var(--primary);
}
p {
	margin-block: 20px;
	font-size: 1.3 rem;
}
</style>
