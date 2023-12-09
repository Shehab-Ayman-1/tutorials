<script setup>
import { ref } from "vue";

const user = ref({ fName: "", lName: "", email: "", password: "", confirmedPassword: "", phone: "", address: "", message: "", trust: false });
const errors = ref([]);

const checkValidity = () => {
	errors.value = [];

	// [1] Check Inputs Fills
	const emptyFields = Object.keys(user.value)
		.filter((key) => (!user.value[key] ? (key === "trust" || key === "message" ? "" : key) : ""))
		.filter((error) => error);

	emptyFields.forEach((error) => errors.value.push(`${error}: Is A Required Field.`));

	// [2] Check Email Validate
	const emailRegex = /[a-zA-Z0-9-_](@gmail.com|@outlook.com)$/; // Just Accept @gmail.com And @outlook.com
	const isEmailValid = emailRegex.test(user.value.email);
	if (!isEmailValid) errors.value.push(`Email Must Contain A Capital Letters, Small Letters, Numbers, And Just Acceptable @gmail.com And @outlook.com.`);

	// [3] Check fName, lName Validates
	const nameRegex = /((\d|\W|\s))/i; // Catch Any Number, Special Character, OR Whitespace
	const isFNameValid = nameRegex.test(user.value.fName);
	if (isFNameValid) errors.value.push(`First Name Not Acceptable Whitespaces, Numbers, OR Special Characters.`);

	const isLNameValid = nameRegex.test(user.value.lName);
	if (isLNameValid) errors.value.push(`Last Name Not Acceptable Whitespaces, Numbers, OR Special Characters.`);

	// [4] Check Password, Comfirmed Password Validates
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // Contain lower, upper, num, and char
	if (user.value.password !== user.value.confirmedPassword) errors.value.push(`Password And Confirmed Password Are Not Matching.`);
	const isPasswordValid = passwordRegex.test(user.value.password);
	if (!isPasswordValid) errors.value.push(`Password Must Include Letters With Lower And Upper Case, Numbers, And Special Characters.`);
};

const handleSubmit = () => {
	// Check Validity
	checkValidity();

	// Submit
	if (errors.value.length) return;

	console.log(user.value);
};
</script>

<template>
	<form @submit.prevent="handleSubmit">
		<h1 class="title">Form Validation</h1>

		<ul class="errors" v-show="errors.length">
			<li v-for="(error, i) in errors" :key="i">
				<p>{{ error }}</p>
			</li>
		</ul>

		<div class="">
			<label for="email">Email:</label>
			<input class="field" type="email" id="email" v-model="user.email" placeholder="email..." />
		</div>

		<div class="flex-between">
			<div class="">
				<label for="password">Password:</label>
				<input class="field" type="text" id="password" v-model="user.password" placeholder="Password..." />
			</div>
			<div class="">
				<label for="confirmPassword">Confirmed Password:</label>
				<input class="field" type="text" id="confirmPassword" v-model="user.confirmedPassword" placeholder="Confirmed Password..." />
			</div>
		</div>

		<div class="flex-between">
			<div class="">
				<label for="fName">First Name:</label>
				<input class="field" type="text" id="fName" v-model="user.fName" placeholder="First Name..." />
			</div>
			<div class="">
				<label for="lName">Last Name:</label>
				<input class="field" type="text" id="lName" v-model="user.lName" placeholder="Last Name..." />
			</div>
		</div>

		<div class="flex-between">
			<div class="">
				<label for="phone">Phone Number:</label>
				<input class="field" type="text" id="phone" v-model="user.phone" placeholder="Phone Number..." />
			</div>
			<div class="">
				<label for="address">Address:</label>
				<input class="field" type="text" id="address" v-model="user.address" placeholder="Address..." />
			</div>
		</div>

		<div class="">
			<label for="message">Message: </label>
			<textarea class="field" id="message" rows="4" v-model="user.message" placeholder="Enter Your Message..."></textarea>
		</div>

		<div class="flex-start">
			<input type="checkbox" id="trust" v-model="user.trust" />
			<label for="trust">Trust This Device:</label>
		</div>

		<button type="submit" class="btn">Submit</button>
	</form>
</template>

<style lang="scss" scoped>
.flex-between {
	flex-wrap: nowrap;
}
form {
	background: #333;
	max-width: 600px;
	width: 100%;
	padding: 0 30px;
	border-radius: 10px;
	margin: auto;
	box-shadow: 0 0 20px black;
	.title {
		color: var(--primary);
	}
	.errors {
		li {
			color: #f44336;
			margin-bottom: 1px;
			p {
				color: #f44336;
			}
		}
	}
	label {
		display: block;
	}
	.btn {
		width: 100%;
		margin: 20px 0;
	}
	.flex-between {
		margin-block: 10px;
		div {
			width: 100%;
		}
	}
}
</style>
