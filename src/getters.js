export default {
	filteredTodos: state => state.todos.filteredTodos,
	todos: state => state.todos.todos,
	leftCount: state => state.todos.todos.filter( todo => !todo.done ).length,
	filter: state => state.todos.filter,
};
