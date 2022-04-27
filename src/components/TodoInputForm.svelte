<script>
	import Icon from "svelte-icons-pack/Icon.svelte";
	import AiOutlinePlusCircle from "svelte-icons-pack/ai/AiOutlinePlusCircle";
	import Keydown from "svelte-keydown";
	import { todos, addTodo } from "../stores/todoStore";

	let valorFormulario = "";

	const agregarTodo = () => {
		if (valorFormulario.trim() !== "") {
			addTodo(valorFormulario);
			localStorage.setItem("listaTodos", JSON.stringify($todos));
			valorFormulario = "";
		}
	};
</script>

<div class="flex justify-center items-center mt-5 ">
	<div class="md:w-1/3 flex space-x-4 w-full">
		<input
			type="text"
			bind:value={valorFormulario}
			class="rounded-lg px-3 py-1 shadow-md focus:scale-105 transition-all duration-300 w-full ease-in-out hover:scale-105"
			placeholder="Put some text..."
		/>
		<Keydown
			on:Enter={() => {
				agregarTodo();
			}}
		/>
		<button
			type="submit"
			on:click={agregarTodo}
			class="bg-white p-2 rounded-lg shadow-lg hover:scale-125 transition-all duration-300 ease-in-out"
			><Icon src={AiOutlinePlusCircle} /></button
		>
	</div>
</div>

<style>
</style>
