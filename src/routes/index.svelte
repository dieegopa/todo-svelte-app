<script>
	import TodoInputForm from "../components/TodoInputForm.svelte";
	import TodoItemList from "../components/TodoItemList.svelte";

	import { todos } from "../stores/todoStore";
</script>

<svelte:head>
	<title>Todoist</title>
</svelte:head>

<h1 class="text-center font-bold text-4xl text-white">My Todos</h1>
<TodoInputForm />
<div class="mt-5 flex justify-center flex-col space-y-5 items-center">
	{#each $todos as todo}
		<TodoItemList {todo} />
	{/each}
</div>

<style>
</style>
