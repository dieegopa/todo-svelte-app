<script>
	import AiOutlineCloseCircle from "svelte-icons-pack/ai/AiOutlineCloseCircle";
	import Icon from "svelte-icons-pack/Icon.svelte";
	import { fade } from "svelte/transition";
	import { removeTodo, completarTodo } from "../stores/todoStore";

	export let todo;
</script>

<div class="bg-white md:w-2/3 p-5 rounded-md box-shadow flex w-full" transition:fade>
	<div class={`flex-1 first-letter:uppercase ${todo.completada ? "line-through" : ""}`}>
		{todo.tarea.toLowerCase()}
	</div>
	<div class="flex items-center space-x-1">
		<div class="flex items-center">
			<input
				type="checkbox"
				id="A3-yes"
				name="A3-confirmation"
				value="yes"
				class="opacity-0 absolute h-6 w-6 hover:cursor-pointer"
				on:change={() => completarTodo(todo.id)}
				checked={todo.completada}
			/>
			<div
				class="bg-white border-2 rounded-md border-blue-900 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-900"
			>
				<svg
					class="fill-current hidden w-3 h-3 text-blue-900  pointer-events-none"
					version="1.1"
					viewBox="0 0 17 12"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g fill="none" fill-rule="evenodd">
						<g transform="translate(-9 -11)" fill="rgba(0, 55, 255)" fill-rule="nonzero">
							<path
								d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
							/>
						</g>
					</g>
				</svg>
			</div>
		</div>
		<button
			on:click={() => removeTodo(todo.id)}
			class="bg-red-600 p-1 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-red-800"
			><Icon src={AiOutlineCloseCircle} color="white" /></button
		>
	</div>
</div>

<style>
	.checked {
		text-decoration: line-through;
	}
</style>
