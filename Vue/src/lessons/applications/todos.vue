<script setup>
import { ref } from "vue";

const todos = ref([
	{ state: false, value: "panana" },
	{ state: true, value: "apple" },
]);
const task = ref({ process: "create", data: "" });

const addTask = () => {
	if (!task.value.data) return alert("Task Can't Be Empty.");

	todos.value.push({ state: false, value: task.value.data });
	task.value = { process: "create", data: "" };
};

const updateTask = () => {
	if (!task.value.data) return alert("Task Can't Be Empty.");
	const { data, index } = task.value;

	todos.value[index] = { state: false, value: data };
	task.value = { process: "create", data: "" };
};

const deleteTask = (index) => {
	todos.value.splice(index, 1);
};

const clearAll = () => {
	todos.value = [];
};

const finishTask = (index) => {
	todos.value[index].state = !todos.value[index].state;
};
</script>

<template>
	<div class="todos">
		<h1 class="title">To Do List</h1>

		<form @submit.prevent>
			<label for="task">Task Field</label>
			<div class="flex-between">
				<input class="field" type="text" id="task" v-model="task.data" placeholder="Enter Your Task." />
				<div class="icons">
					<i type="submit" class="fa fa-plus" @click="addTask" v-if="task.process === 'create'" />
					<i type="submit" class="fa fa-edit" @click="updateTask" v-if="task.process === 'update'" />
				</div>
			</div>
		</form>

		<ul>
			<li v-for="(todo, i) in todos" :key="i" :class="todo.state ? `finish` : ``">
				<p @click="finishTask(i)">{{ todo.value }}</p>
				<div class="icons">
					<i class="far fa-edit" v-if="!todo.state" @click="task = { process: 'update', data: todo.value, index: i }" />
					<i class="far fa-trash-alt" @click="deleteTask(i)" />
				</div>
			</li>
		</ul>

		<button class="btn" v-if="todos.length > 2" @click="clearAll">Clear All</button>
	</div>
</template>

<style lang="scss" scoped>
.flex-between {
	flex-wrap: nowrap;
}
.todos {
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
	.btn {
		width: 100%;
		margin: 0;
	}
	.icons {
		display: flex;
		gap: 10px;
		.fa-plus {
			color: white;
			font-size: 1.5rem;
		}
		.fa-edit {
			color: orange;
		}
		.fa-trash-alt {
			color: orangered;
		}
	}
	ul {
		li {
			background-color: rgb(0 0 0 / 0.2);
			padding: 10px;
			margin-block: 20px;
			border-radius: 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-shadow: inset 0 0 20px black;
			border: inset 1px black;
			&.finish p {
				text-decoration: 3px line-through rgb(141, 134, 134);
			}
			p {
				color: gray;
				width: 100%;
				font-size: 1.3rem;
				cursor: pointer;
			}
		}
	}
}
</style>
