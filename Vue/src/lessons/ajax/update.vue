<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import postsApi from "@/api/posts.json";
import useFetch from "@/components/ajax/useFetch";

const { loading, error, isSubmitted, refetch } = useFetch();
const route = useRoute();
const router = useRouter();

const { id } = route.params;

const post = computed(() => {
	const post = postsApi.find((post) => post.id === +id);
	return post;
});

const handleUpdate = async () => {
	const { error, isSubmitted } = await refetch("PUT", `https://jsonplaceholder.typicode.com/posts/${id}`, post.value);
	if (isSubmitted && !error) {
		alert("The Post Was Successfully Updated.");
		router.push("/ajax/get");
	}
};
</script>

<template>
	<h3 v-if="!isSubmitted && loading">Loading...</h3>

	<form @submit.prevent @submit="handleUpdate">
		<h1 class="title">UPDATE POST</h1>
		<h3 style="color: red" v-if="isSubmitted && error">{{ error }}</h3>
		<div class="title">
			<label for="title">title:</label>
			<input type="text" class="field" id="title" v-model="post.title" required />
		</div>
		<div class="date">
			<label for="date">date:</label>
			<input type="date" class="field" id="date" v-model="post.date" required />
		</div>
		<div class="content">
			<label for="content">content:</label>
			<textarea id="content" class="field" v-model="post.content" required />
		</div>
		<div class="author">
			<label for="author">author:</label>
			<input type="text" class="field" id="author" v-model="post.author" required />
		</div>
		<div class="category">
			<label for="category">category:</label>
			<input type="text" class="field" id="category" v-model="post.category" required />
		</div>
		<button class="btn" type="submit">{{ loading ? "Loading..." : "Update Post" }}</button>
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
			width: 150px;
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
