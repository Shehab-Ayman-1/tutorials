<script setup>
import { ref } from "vue";

const name = ref("shehab");
</script>

<template>
	<p v-once>with v-one - {{ name }}</p>
	<p>without v-one - {{ name }}</p>
	<button class="btn" @click="name = 'hesham'">Change To Hesham</button>
	<input type="text" v-model="name" />
</template>

<style scoped>
input {
	color: black;
	display: block;
}
.btn {
	margin-block: 20px;
}
</style>
