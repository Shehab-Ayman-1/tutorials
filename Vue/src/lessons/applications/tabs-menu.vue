<script setup>
import { ref } from "vue";

const tabIndex = ref(0);

const tabs = [
	{
		name: "tab 1",
		title: "Content 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nostrum!",
	},
	{
		name: "tab 2",
		title: "Content 2",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus accusantium sapiente magnam quisquam eligendi mollitia voluptatem fuga, fugiat assumenda at?",
	},
	{
		name: "tab 3",
		title: "Content 3",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In modi possimus exercitationem aperiam cumque quisquam natus error voluptatibus, ut quod dolore soluta nisi aspernatur sed dolores tenetur illum repellat totam?",
	},
	{
		name: "tab 4",
		title: "Content 4",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nostrum!",
	},
	{
		name: "tab 5",
		title: "Content 5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime deleniti? Iste cum sit laborum veritatis perspiciatis expedita doloribus vero. Similique alias non, molestiae excepturi, harum fuga voluptas laborum autem cumque aliquid porro laboriosam. Est iste animi in ut temporibus?",
	},
];
</script>

<template>
	<div class="container">
		<div class="tabs">
			<h3 v-for="(tab, i) in tabs" :key="i" @click="tabIndex = i" :class="{ active: tabIndex === i }">{{ tab.name }}</h3>
		</div>

		<div class="menus">
			<h3>{{ tabs[tabIndex].title }}</h3>
			<p>{{ tabs[tabIndex].description }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	box-shadow: 0 0 20px black;
	.tabs {
		padding: 20px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 50px;
		border-bottom: 2px solid black;
		h3 {
			background: #333;
			padding: 10px;
			white-space: nowrap;
			border-radius: 10px;
			cursor: pointer;
			opacity: 0.5;
			&.active {
				opacity: 1;
			}
		}
	}
	.menus {
		padding: 20px;
		border-radius: 20px;
	}
}
</style>
