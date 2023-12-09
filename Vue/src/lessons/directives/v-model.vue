<script setup>
import { ref } from "vue";

const user = ref({
	username: "",
	phone: "",
	address: "",
	email: "",
	password: "",
	isAdmin: false,
	country: "palastine",
	skills: [],
	job: "",
});

const handleSubmit = (event) => {
	event.preventDefault();
	console.log(user.value);
};
</script>

<template>
	<div class="">
		<h3>User Info:</h3>
		<input type="text" class="field" placeholder="Username..." v-model="user.username" />
		<input type="number" class="field" placeholder="Phone Number..." v-model="user.phone" />
		<input type="text" class="field" placeholder="Address..." v-model="user.address" />
	</div>

	<div class="">
		<h3>User Secure:</h3>
		<input type="email" class="field" placeholder="Email..." v-model="user.email" />
		<input type="password" class="field" placeholder="Password..." v-model="user.password" />
		<div class="flex-start">
			<input type="checkbox" id="user" v-model="user.isAdmin" />
			<label for="user">IsAdmin</label>
		</div>
	</div>

	<div class="flex-start">
		<div class="flex-start">
			<input type="radio" value="egypt" name="country" id="egypt" v-model="user.country" />
			<label for="egypt">Egypt</label>
		</div>
		<div class="flex-start">
			<input type="radio" value="suadi" name="country" id="suadi" v-model="user.country" />
			<label for="suadi">Suadi Arabia</label>
		</div>
		<div class="flex-start">
			<input type="radio" value="palastine" name="country" id="palastine" v-model="user.country" />
			<label for="palastine">Palastine</label>
		</div>
	</div>

	<div class="flex-start">
		<div class="flex-start">
			<input type="checkbox" value="React.js" id="react" v-model="user.skills" />
			<label for="react">React.js</label>
		</div>
		<div class="flex-start">
			<input type="checkbox" value="Vue.js" id="vue" v-model="user.skills" />
			<label for="vue">Vue.js</label>
		</div>
		<div class="flex-start">
			<input type="checkbox" value="Angular.js" id="angular" v-model="user.skills" />
			<label for="angular">Angular.js</label>
		</div>
	</div>

	<div class="">
		<select className="field" v-model="user.job">
			<option value="">Select Your Job</option>
			<option value="Frontend Developer">Frontend Developer</option>
			<option value="Backend Developer">Backend Developer</option>
			<option value="Fullstack Developer">Fullstack Developer</option>
			<option value="MERN Stack Developer">MERN Stack Developer</option>
		</select>
	</div>
	<button type="submit" class="btn" @click="handleSubmit">Submit</button>
</template>

<style scoped></style>
