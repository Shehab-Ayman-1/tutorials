<script setup>
import { ref, defineProps } from "vue";
import useFetch from "@/components/ajax/useFetch";

defineProps({ post: Object });
</script>

<template>
	<div class="post">
		<div class="header-section">
			<span class="views">{{ post.views }}</span>
			<div class="">
				<router-link :to="`/ajax/update/${post.id}`" class="far fa-edit update" />
				<i class="far fa-trash-alt delete" @click="$emit('handleDelete', post.id)" />
			</div>
		</div>

		<div class="body-section">
			<h3 class="title">{{ post.title }}</h3>
			<span class="date">{{ post.date }}</span>
			<p class="content">{{ post.content }}</p>
		</div>

		<div class="footer-section">
			<span class="author">{{ post.author }}</span>
			<span class="category">{{ post.category }}</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.post {
	background: #333;
	padding: 10px;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	box-shadow: 0 0 100px black;
	position: relative;
	.header-section {
		display: flex;
		justify-content: space-between;
		align-content: center;
		.views {
			background: orange;
			color: black;
			height: fit-content;
			padding: 5px;
			line-height: 1;
			font-size: 16px;
			border-radius: 5px;
			border: 1px solid gray;
		}
		.delete {
			@extend .views;
			background: transparent;
			color: red;
			border: 0;
			cursor: pointer;
			&:hover {
				color: crimson;
			}
		}
		.update {
			@extend .delete;
			color: orange;
			&:hover {
				color: darkorange;
			}
		}
	}
	.body-section {
		height: 100%;
		.title {
			margin: 0;
			line-height: 1;
			text-align: left;
		}
		.date {
			color: gray;
		}
		.content {
			color: #bbb;
			line-height: 2.4;
		}
	}
	.footer-section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		.author {
			background: cadetblue;
			min-width: 100px;
			padding: 0 10px;
			text-align: center;
			border-radius: 5px;
			cursor: pointer;
			&:hover {
				opacity: 0.8;
			}
		}
		.category {
			background: crimson;
			min-width: 100px;
			padding: 0 10px;
			text-align: center;
			border-radius: 5px;
			cursor: pointer;
			&:hover {
				opacity: 0.8;
			}
		}
	}
}
</style>
