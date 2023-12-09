<script setup>
import { ref } from "vue";

const links = ref([
	{ name: "home", path: "/home", sublinks: ["one", "two", "three"] },
	{ name: "about", path: "/about", sublinks: ["one", "two", "three"] },
	{ name: "services", path: "/services", sublinks: ["one", "two", "three"] },
	{ name: "content", path: "/content", sublinks: ["one", "two", "three"] },
	{ name: "footer", path: "/footer", sublinks: ["one", "two", "three"] },
]);
</script>

<template>
	<h1>links:</h1>
	<ul>
		<li v-for="link in links">
			- <a :href="link.path">{{ link.name }}</a>
			<div class="flex-start">
				<a v-for="sublink in link.sublinks" :href="link.path + '/' + sublink">- - {{ sublink }}</a>
			</div>
		</li>
	</ul>
</template>

<style scoped>
ul {
	padding-left: 20px;
}

li {
	list-style: none;
	margin-block: 10px;
}

a {
	color: aliceblue;
	font-size: 1.3rem;
	text-decoration: none;
}
</style>
