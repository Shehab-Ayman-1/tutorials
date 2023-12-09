<script setup>
import { ref, toValue } from "vue";
import { useRouter } from "vue-router";
import postsApi from "@/api/posts.json";
import useFetch from "@/components/ajax/useFetch";

const post = ref({ id: postsApi.at(-1).id + 1, title: "", date: "", content: "", author: "", category: "", views: 0 });
const { loading, error, isSubmitted, refetch } = useFetch();
const router = useRouter();

const handleSubmit = async () => {
	const { isSubmitted, error } = await refetch("POST", `https://jsonplaceholder.typicode.com/posts`, post.value);
	if (isSubmitted && !error) {
		router.push("/ajax/get");
		alert("The Post Was Successfully Created.");
	}
};
</script>

<template>
	<form @submit.prevent @submit="handleSubmit">
		<h1 class="title">CREATE POST</h1>
		<h3 style="color: red" v-if="isSubmitted && error">{{ error }}</h3>

		<div class="title">
			<label for="title">title:</label>
			<input type="text" class="field" id="title" v-model="post.title" required placeholder="Enter Post Title" />
		</div>
		<div class="date">
			<label for="date">date:</label>
			<input type="date" class="field" id="date" v-model="post.date" required placeholder="Enter Post Date" />
		</div>
		<div class="content">
			<label for="content">content:</label>
			<textarea id="content" class="field" v-model="post.content" required placeholder="Enter Post Content" />
		</div>
		<div class="author">
			<label for="author">author:</label>
			<input type="text" class="field" id="author" v-model="post.author" required placeholder="Enter Post Author" />
		</div>
		<div class="category">
			<label for="category">category:</label>
			<input type="text" class="field" id="category" v-model="post.category" required placeholder="Enter Post Category" />
		</div>
		<button class="btn" type="submit">{{ loading ? "Loading..." : "Create Post" }}</button>
	</form>
</template>

<style lang="scss" scoped>
form {
	background: #333;
	width: 600px;
	padding: 10px;
	margin: auto;
	border-radius: 20px;
	box-shadow: 0 0 20px black;
	div {
		text-align: left;
		display: flex;
		justify-content: start;
		align-items: center;
		label {
			color: var(--primary);
			width: 200px;
			display: block;
			font-size: 2rem;
			font-weight: bold;
		}
	}
	.btn {
		width: 100%;
		margin: 20px 0 0;
	}
}
</style>
