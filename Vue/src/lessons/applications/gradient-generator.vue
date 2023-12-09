<script setup>
import { ref } from "vue";

const gradient = ref({ direction: "to right", colors: ["#f00000", "#ffff00"] });
</script>

<template>
	<div class="gradient" :style="{ backgroundImage: `linear-gradient(${gradient.direction}, ${gradient.colors.join(', ')})` }">Gradient Generator</div>

	<form @submit.prevent>
		<div class="">
			<label for="direction">Direction:</label>
			<select class="field" id="direction" v-model="gradient.direction">
				<option value="to top">To Top</option>
				<option value="to bottom">To Bottom</option>
				<option value="to right">To Right</option>
				<option value="to left">To left</option>
			</select>
		</div>

		<div class="" v-for="(color, i) in gradient.colors" :key="i">
			<label :for="`color${i + 1}`">Color {{ i + 1 }}:</label>
			<input type="color" :id="`color${i + 1}`" v-model="gradient.colors[i]" />
		</div>
	</form>

	<span class="new-color" @click="gradient.colors.push(`#ffffff`)">Add New Color</span>

	<div class="output">
		<div class="">
			<h3>Css Code</h3>
			<p>background-image: linear-gradient({{ gradient.direction }}, {{ gradient.colors.join(", ") }})</p>
		</div>
		<div class="">
			<h3>Syntax</h3>
			<p>background-image: linear-gradient(direction, color-stop-1, color-stop-2, ...)</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.gradient {
	color: black;
	width: 100%;
	height: 100px;
	font-size: 2rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	border: inset 1px solid #333;
	box-shadow: 0 0 10px black;
}

form {
	display: flex;
	justify-content: center;
	justify-items: center;
	flex-wrap: wrap;
	gap: 50px;
	label {
		display: block;
	}
}

.new-color {
	color: rgba(orange, 0.8);
	width: fit-content;
	margin: 20px auto;
	font-size: 1.5rem;
	display: block;
	text-align: center;
	cursor: pointer;
	&:hover {
		color: orange;
	}
}

.output {
	div {
		background: var(--secondary);
		padding: 10px;
		margin-block: 20px;
		display: flex;
		justify-content: flex-start;
		justify-items: center;
		gap: 15px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
		h3 {
		}
		p {
		}
	}
}
</style>
