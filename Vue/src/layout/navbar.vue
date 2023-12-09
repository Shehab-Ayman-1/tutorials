<script setup>
import { ref, watch } from "vue";
import Sidebar from "./sidebar.vue";

let showSidebar = ref(false);
const timeNow = ref(new Date().toLocaleTimeString("en"));

let handleOpenSidebar = () => {
	showSidebar.value = true;
};

let handleCloseSidebar = () => {
	showSidebar.value = false;
};

watch(() => {
	setInterval(() => {
		const time = new Date().toLocaleTimeString("en");
		timeNow.value = time;
	}, 1000);
});
</script>

<template>
	<div class="navbar flex-between">
		<div class="flex-start">
			<i class="fa fa-bars" @click="handleOpenSidebar()" />
			<router-link to="/" class="logo flex-start">
				<img src="@/assets/images/vue.svg" alt="logo" />
				<h3>Vue Toturial</h3>
			</router-link>
		</div>

		<p class="timenow">{{ timeNow }}</p>

		<div class="overlay" v-if="showSidebar" @click="showSidebar = false" />

		<Sidebar v-show="showSidebar" @handleCloseSidebar="handleCloseSidebar" />
	</div>
</template>

<style lang="scss" scoped>
.overlay {
	background-color: rgb(0 0 0 / 0.2);
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	cursor: pointer;
}

.navbar {
	background-color: #111;
	color: white;
	width: 100%;
	padding: 10px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1000;
	box-shadow: 0 0 10px black;
	.logo {
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: bold;
	}
	.timenow {
		color: var(--primary);
		letter-spacing: 5px;
	}
}
</style>
