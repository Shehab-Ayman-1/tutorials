<!-- 
	The difference between reactive and ref -> is that reactive is used to make an object reactive, 
	while ref is used to make any value reactive, including primitives (such as strings, numbers, booleans, etc.) 
	and objects. Reactive objects can be accessed and modified directly, while ref values need to use the .
	value property to get or set the value.
-->

<script setup>
import Navbar from "@/layout/navbar.vue";
</script>

<template>
	<Navbar />
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<style>
.app {
	margin: 20px;
}

i {
	cursor: pointer;
}

i:hover {
	opacity: 0.8;
}

.flex-start {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px;
}

.flex-between {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
}

.btn {
	background-color: black;
	color: white;
	padding: 10px 20px;
	margin: 20px;
	cursor: pointer;
	border-radius: 10px;
	border: 1px solid mediumvioletred;
}

.btn:hover {
	background-color: #222;
	outline: 3px solid darkviolet;
}

.field {
	background-color: rgb(0 0 0 / 0.2);
	max-width: 600px;
	width: 100%;
	padding: 5px 10px;
	font-size: 1rem;
	border-radius: 10px;
	box-shadow: inset 0 0 10px black;
}

option {
	background-color: black;
}
</style>
