<script setup>
import { ref } from "vue";

const arr = Array(100).fill(0);
const text =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam iusto, minima ullam sequi laborum animi dolores officia vel minus consequuntur natus placeat soluta, dolorum modi provident sit molestias doloribus!";
</script>

<template>
	<div class="filters">
		<div class="">
			<h3>UpperCase:</h3>
			<p>{{ $filters.uppercase("Shehab") }}</p>
		</div>
		<div class="">
			<h3>Revesing:</h3>
			<p>{{ $filters.reversing("Shehab") }}</p>
		</div>
		<div class="">
			<h3>limitText:</h3>
			<p>{{ $filters.limitText(text, 100) }}</p>
		</div>
		<div class="">
			<h3>zFill:</h3>
			<p>
				<span v-for="(_, i) in arr" :key="i">{{ $filters.zFill(i + 1, 3) }} - </span>
			</p>
		</div>
		<div class="">
			<h3></h3>
		</div>
	</div>
</template>

<style lang="scss" scoped>
h3 {
	color: var(--primary);
}
p {
	margin-left: 20px;
}
</style>
