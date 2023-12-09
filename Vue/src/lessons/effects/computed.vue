<script setup>
import { ref, computed, reactive } from "vue";

// Example: 1
const word = ref("Vue.js");
const searchText = reactive({ text: "vue" });
const counter = ref(0);

const cWord = computed(() => {
	console.log("computed."); // just log 1 time for all the render times
	return word;
});

const fnWord = () => {
	console.log("function."); // log For Each Render On The Page
	return word;
};

// Example: 2
const langs = ref(["html", "css", "js", "sass", "react", "vue", "angular", "node", "express", "mongodb"]);
const searchLangs = computed(() => {
	const regex = new RegExp(searchText.text, "i");
	const matchingLangs = langs.value.filter((lang) => lang.match(regex));
	return matchingLangs;
}, [searchText]);
</script>

<template>
	<h4>Computed(): Similar To useEffect() Without Depencies</h4>

	<hr />

	<div class="Example-1">
		<h3>Example: 1</h3>
		<p>Function Word: {{ fnWord() }}</p>
		<p>Computed Word: {{ cWord }}</p>
		<span>Count: {{ counter }}</span>
		<button class="btn" @click="counter++">+ 1</button>
	</div>

	<hr />

	<div class="Example-2">
		<h3>Example: 2</h3>
		<input type="text" class="field" v-model="searchText.text" placeholder="Search..." />
		<p>Result: {{ word }}</p>
		<ul>
			<li v-for="lang in searchLangs">{{ lang }}</li>
		</ul>
	</div>
</template>

<style scoped>
h3 {
	color: var(--primary);
}
</style>
