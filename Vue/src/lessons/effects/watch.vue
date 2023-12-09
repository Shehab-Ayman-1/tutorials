<script setup>
import { ref, watch } from "vue";
const currency = ref({ eg: 0, sar: 0 });
const timeNow = ref(new Date().toLocaleTimeString());
const time = ref({ hours: 0, minutes: 0, seconds: 0 });

watch(
	// Now We Watch The Source Value And Not Do Anything With The New Value Of timeNow
	() => {
		setInterval(() => {
			timeNow.value = new Date().toLocaleTimeString();
		}, 1000);
	}
);

watch(
	// Source That Will Be Watched
	() => ({ ...currency.value }),
	// Callback(newValue, oldValue)
	(newValue, oldValue) => {
		if (newValue.eg !== oldValue.eg) {
			currency.value.sar = newValue.eg / 5;
			console.log("eg");
		}

		if (newValue.sar !== oldValue.sar) {
			currency.value.eg = newValue.sar * 5;
			console.log("sar");
		}
	},
	// Use deep option to watch nested properties
	{ deep: true }
);

watch(
	() => ({ ...time.value }),
	(newValue, oldValue) => {
		if (newValue.hours !== oldValue.hours) {
			console.log("hours");
			time.value.minutes = newValue.hours * 60;
		}

		if (newValue.minutes !== oldValue.minutes) {
			console.log("minutes");
			time.value.seconds = newValue.minutes * 60;
		}

		if (newValue.seconds !== oldValue.seconds) {
			console.log("seconds");
			time.value.hours = newValue.seconds / 3600;
		}
	},
	{ deep: true }
);
</script>

<template>
	<div class="timer">
		<h1>Timer: {{ timeNow }}</h1>
	</div>

	<hr />

	<div class="currency-converter">
		<h1>Currency Converter</h1>
		<div class="flex-start">
			<label for="eg">Egyptian Pound (EGP)</label>
			<input type="number" id="eg" v-model="currency.eg" />
		</div>
		<div class="flex-start">
			<label for="sar">Saudi Riyal (SAR)</label>
			<input type="number" id="sar" v-model="currency.sar" />
		</div>
	</div>

	<hr />

	<div class="time-converter">
		<div class="flex-start">
			<label for="hours">Hours</label>
			<input type="number" id="hours" v-model="time.hours" />
		</div>
		<div class="flex-start">
			<label for="minutes">Minutes</label>
			<input type="number" id="minutes" v-model="time.minutes" />
		</div>
		<div class="flex-start">
			<label for="seconds">Seconds</label>
			<input type="number" id="seconds" v-model="time.seconds" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
input {
	color: black;
}

hr {
	margin-block: 50px 30px;
}
</style>
