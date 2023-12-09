<script setup>
import { ref } from "vue";

const user = ref({ name: "shehab", age: 23, skills: ["react", "vue", "node", "mongo"], isAvailable: true });
const fetchUser = ref(false);
</script>

<template>
	<div class="user" v-if="fetchUser">
		<div class="flex-start">
			<h3>Username:</h3>
			<p>{{ user.name }}</p>
		</div>

		<br />

		<div class="flex-start">
			<h3>Age:</h3>
			<p>{{ user.age }} {{ user.age > 50 ? "retired" : user.age > 30 ? "Approach a retiree" : user.age > 20 ? "young man" : "Very small" }}</p>
		</div>

		<br />

		<div class="flex-start">
			<h3>Age:</h3>
			<p>{{ user.age }}</p>
			<p v-if="user.age > 50">retired</p>
			<p v-else-if="user.age > 30">Approach a retiree</p>
			<p v-else-if="user.age > 20">young man</p>
			<p v-else>Very small</p>
		</div>

		<br />

		<div class="flex-start">
			<h3>Skills:</h3>
			<p>{{ user.skills.join(" | ") }}</p>
		</div>

		<br />

		<div class="flex-start">
			<h3>Is Available:</h3>
			<p>{{ user.isAvailable ? "Available For Hire" : "Have Another Job" }}</p>
		</div>

		<br />

		<div class="flex-start">
			<h3>Is Available:</h3>
			<p v-if="user.isAvailable">Available For Hire</p>
			<p v-else="user.isAvailable">Have Another Job</p>
		</div>

		<button class="btn" @click="fetchUser = false">Hide User</button>
	</div>
	<button class="btn" @click="fetchUser = true" v-if="!fetchUser">Fetch User</button>
</template>

<style scoped>
.btn {
	margin-top: 20px;
}
</style>
