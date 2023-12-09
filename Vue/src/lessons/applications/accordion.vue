<script setup>
import { ref } from "vue";

const countries = [
	{
		name: "Grenada",
		content: "label tiny half pot instrument movement complex behind done rate noise primitive land leather along dozen front studied pool nation jet free boy orange",
	},
	{
		name: "Libya",
		content: "short broken bottle gently muscle respect pain attached rain dress account against swing blanket sang drawn planning slide double hello train electricity inside victory",
	},
	{
		name: "Vatican City",
		content: "rich begun away read engineer onto figure pet depend temperature activity spirit tell finish major spin lie battle dear largest join let oldest active",
	},
	{
		name: "Pitcairn Islands",
		content: "danger yes instead case name matter failed nobody short funny happen friend history pure red importance term believed helpful gold physical recently middle leader",
	},
	{
		name: "Brazil",
		content: "facing pain church hunter essential state parent shaking forget news ship die thought branch answer usual town small gently perfectly nearest coal universe airplane",
	},
];

const index = ref(0);
</script>

<template>
	<div class="accordion">
		<div class="country" v-for="(country, i) in countries" :key="i">
			<div class="flex-between" @click="index = index === i ? null : i">
				<h3 class="title">{{ country.name }}</h3>
				<i class="fa fa-chevron-right" :class="{ active: index === i }" />
			</div>
			<p class="content" :class="{ active: index === i }">{{ country.content }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accordion {
	max-width: 600px;
	width: 100%;
	margin: auto;
	.country {
		background: var(--dimBlack);
		color: gray;
		padding: 10px;
		margin-bottom: 20px;
		border-radius: 15px;
		font-size: 1rem;
		line-height: 3;
		text-transform: capitalize;
		border: inset 1px solid black;
		box-shadow: inset 0 0 15px black;
		.flex-between {
			cursor: pointer;
			.title {
				text-align: left;
				line-height: 1;
			}
			i {
				color: orange;
				font-size: 1.5rem;
				&.active {
					rotate: 90deg;
				}
			}
		}
		.content {
			background: var(--dimBlack);
			color: gray;
			max-height: 0;
			overflow: hidden;
			font-size: 1rem;
			line-height: 3;
			text-transform: capitalize;
			box-shadow: inset 0 0 15px black;
			&.active {
				padding: 10px;
				max-height: 100px;
				border: inset 1px black;
			}
		}
	}
}
</style>
