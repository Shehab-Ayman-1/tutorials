<script setup>
import { ref } from "vue";

const show = ref(false);
</script>

<template>
	<p v-show="show">v-show Toggled With display: none</p>
	<p v-if="!show">v-if Toggled With Rendering</p>
</template>

<style scoped></style>
