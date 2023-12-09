<script setup>
import { ref } from "vue";

const data = ref({ imgSrc: "/src/assets/images/vue.svg", imgUrl: "https://google.com", imgAlt: "logo" });
</script>

<template>
	<a v-bind:href="data.imgUrl">
		<img v-bind:src="data.imgSrc" v-bind:alt="data.imgAlt" />
	</a>
	<a :href="data.imgUrl">
		<img :src="data.imgSrc" :alt="data.imgAlt" />
	</a>
</template>

<style scoped>
a {
	margin: 30px;
}
</style>
