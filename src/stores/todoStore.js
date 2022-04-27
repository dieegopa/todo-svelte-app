import { writable } from "svelte-local-storage-store";
import { v4 as uuidv4 } from "uuid";

export const todos = writable("listaTodos", []);

export const addTodo = (texto) => {
	todos.update((cur) => {
		const newTodos = [
			...cur,
			{
				id: uuidv4(),
				tarea: texto,
				completada: false
			}
		];

		return newTodos;
	});
};

export const removeTodo = (id) => {
	todos.update((todos) => {
		return todos.filter((todo) => todo.id !== id);
	});
};

export const completarTodo = (id) => {
	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}

		if (index !== -1) {
			todos[index].completada = !todos[index].completada;
		}

		return todos;
	});
};
