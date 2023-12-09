<script setup>
import { ref } from "vue";

const counter = ref(0);

const doThis = () => {};
</script>

<template>
	<div class="v-on">
		<span class="counter">Counter: {{ counter }}</span>
		<button class="btn" @click="counter++">@click + 1</button>
		<button class="btn" @auxclick="counter--">@auxclick - 1</button>
		<button class="btn" v-on:dblclick="counter -= 2">@dblclick - 2</button>

		<div class="Modifiers">
			<!-- prevent default without expression -->
			<form @submit.prevent>
				<button type="submit" class="btn">Submit</button>
			</form>

			<!-- object syntax -->
			<button class="btn" v-on="{ mousedown: doThis(), mouseup: doThis(), click: doThis() }">@multiple</button>

			<!-- chain modifiers -->
			<button class="btn" @click.stop.prevent="doThis()">@chain</button>

			<!-- call event.stopPropagation(). -->
			<button class="btn" @click.stop="counter++">@stop + 1</button>

			<!-- call event.preventDefault(). -->
			<button class="btn" @click.prevent="counter++">@prevent + 1</button>

			<!-- add event listener in capture mode. -->
			<button class="btn" @click.capture="counter++">@capture + 1</button>

			<!-- only trigger handler if event was dispatched from this element. -->
			<button class="btn" @click.self="counter++">@self + 1</button>

			<!-- only trigger handler on certain keys. -->
			<button class="btn" @keyup.enter="counter++">@keyup + 1</button>

			<!-- trigger handler at most once. -->
			<button class="btn" @click.once="counter++">@once + 1</button>

			<!-- only trigger handler for left button mouse events. -->
			<button class="btn" @click.left="counter++">@left + 1</button>

			<!-- only trigger handler for right button mouse events. -->
			<button class="btn" @click.right="counter++">@right + 1</button>

			<!-- only trigger handler for middle button mouse events. -->
			<button class="btn" @click.middle="counter++">@middle + 1</button>

			<!-- attaches a DOM event with { passive: true }. -->
			<button class="btn" @click.passive="counter++">@passive + 1</button>
		</div>
	</div>
</template>

<style scoped>
.v-on {
	text-align: center;
}
.counter {
	display: block;
}
</style>
