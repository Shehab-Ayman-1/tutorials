<script setup>
import { ref } from "vue";
import Post from "@/components/ajax/post.vue";
import useFetch from "@/components/ajax/useFetch";

const { data: posts, loading, error, isSubmitted } = useFetch("GET", "/src/api/posts.json");
const { refetch } = useFetch();

const handleDelete = async (id) => {
	const { error, isSubmitted } = await refetch("DELETE", `https://jsonplaceholder.typicode.com/posts/${id}`);

	if (isSubmitted && !error) {
		const postIndex = posts.value.findIndex((post) => post.id === id);
		posts.value.splice(postIndex, 1);

		alert("The Post Was Successfully Deleted.");
	}
};
</script>

<template>
	<h3 v-if="!isSubmitted && loading">Loading...</h3>
	<h3 v-if="isSubmitted && error" style="color: red">{{ error }}</h3>

	<router-link to="/ajax/create" class="btn" v-if="isSubmitted && !error">
		<i class="fa fa-plus" />
		<p>Create New Post</p>
	</router-link>

	<div class="posts">
		<Post v-for="(post, i) in posts" :key="i" :post="post" @handleDelete="handleDelete" />
	</div>
</template>

<style lang="scss" scoped>
.btn {
	width: fit-content;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	gap: 10px;
}
.posts {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 20px;
	@media (max-width: 500px) {
		grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
	}
}
</style>
