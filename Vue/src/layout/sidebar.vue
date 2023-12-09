<script setup>
import { navlinks } from "@/constants/routes.js";
import { ref } from "vue";

const state = ref({ open: true, index: 4 });

const handleOpenList = (index) => {
	if (state.value.open && index === state.value.index) state.value = { open: false, index };
	else state.value = { open: true, index };
};

const handleCloseSidebar = () => {
	// Close Sidebar
};
</script>

<template>
	<section class="sidebar">
		<div class="head">
			<h3 class="title">Sidebar</h3>
			<i class="fa fa-times" @click="$emit('handleCloseSidebar')" />
		</div>

		<div class="body" v-for="(box, i) in navlinks" :key="i">
			<div class="box">
				<div class="heading flex-between" @click="handleOpenList(i)">
					<h3 :style="{ color: state.open && state.index === i ? 'orange' : '' }">{{ box.heading }}</h3>
					<i class="fa fa-chevron-right" :class="{ active: state.open && state.index === i }" />
				</div>

				<div class="navlinks" :class="{ maxHeight: state.open && state.index === i }" @click="$emit('handleCloseSidebar')">
					<router-link :to="link.path" class="link flex-start" v-for="(link, i) in box.links" :key="i">
						<p style="color: orange">-</p>
						<h3>{{ link.name }}</h3>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
.sidebar {
	background-color: var(--dimBlack);
	width: 250px;
	height: 100%;
	position: fixed;
	top: 0px;
	left: 0;
	overflow: auto;
	box-shadow: 0 0 20px black;
}
.title {
	color: var(--primary);
	text-align: center;
	font-size: 30px;
	padding: 10px 0;
	margin-top: 10px;
}
.fa-times {
	position: absolute;
	top: 20px;
	right: 20px;
	font-size: 1.2rem;
}
.body .box {
	padding-inline: 10px;
}
.body .box .heading {
	color: gray;
	cursor: pointer;
	margin-top: 10px;
}
.body .box .fa-chevron-right.active {
	color: orange;
	rotate: 90deg;
}
.body .box .navlinks {
	max-height: 0;
	padding-left: 10px;
	overflow: hidden;
}
.body .box .navlinks.maxHeight {
	max-height: 500px;
}
.body .box .navlinks .link {
	padding: 5px 0;
	text-decoration: none;
}
.body .box .navlinks .link h3 {
	color: #aaa;
	font-size: 1rem;
}
.body .box .navlinks .link:hover h3 {
	color: orangered;
}
.router-link-active h3 {
	color: orange !important;
}
</style>
