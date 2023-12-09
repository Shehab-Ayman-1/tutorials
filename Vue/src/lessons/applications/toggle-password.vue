<script setup>
import { ref } from "vue";

const user = ref({ email: "", password: "" });
const showPasswrd = ref(false);

const handleSubmit = () => {
	console.log(user.value);
};
</script>

<template>
	<form @submit.prevent="handleSubmit">
		<div class="">
			<label for="email">Email:</label>
			<input class="field" type="email" v-model="user.email" placeholder="Enter Your Email..." required />
		</div>
		<div class="">
			<label for="password">Password:</label>
			<div class="flex-between nowrap">
				<input class="field" :type="showPasswrd ? 'text' : 'password'" placeholder="Enter Your Password..." v-model="user.password" required />
				<i :class="showPasswrd ? `fa fa-eye-slash` : `fa fa-eye`" @click="showPasswrd = !showPasswrd" />
			</div>
		</div>
		<button type="submit" class="btn">Submit</button>
	</form>
</template>

<style lang="scss" scoped>
.nowrap {
	flex-wrap: nowrap;
}
label {
	display: block;
}
.field {
	max-width: initial;
}
</style>
