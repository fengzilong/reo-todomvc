import Todo from './Todo';

export default {
	computed: {
		todos: 'todos',
		leftCount: 'leftCount',
		filter: 'filter',
		filteredTodos: 'filteredTodos',
	},
	components: {
		Todo
	},
	template: `
		<section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<input class="new-todo"  placeholder="What needs to be done?" autofocus on-keyup="{ this.onKeyup( $event ) }">
			</header>

			<section class="main">
				{#if todos.length > 0}
				<input class="toggle-all" type="checkbox" on-click="{ this.dispatch( 'toggleAll' ) }">
				<label for="toggle-all">Mark all as complete</label>
				{/if}

				<ul class="todo-list">
					{#list filteredTodos as todo}
					<Todo todo="{ todo }"></Todo>
					{/list}
				</ul>
			</section>

			{#if todos.length > 0}
			<footer class="footer">
				<span class="todo-count"><strong>{ leftCount }</strong> item left</span>
				<ul class="filters">
					<li>
						<a href="javascript:;" class="{ filter === 'all' ? 'selected' : '' }" on-click="{ this.dispatch( 'filter', 'all' ) }">All</a>
					</li>
					<li>
						<a href="javascript:;" class="{ filter === 'active' ? 'selected' : '' }"  on-click="{ this.dispatch( 'filter', 'active' ) }">Active</a>
					</li>
					<li>
						<a href="javascript:;" class="{ filter === 'completed' ? 'selected' : '' }"  on-click="{ this.dispatch( 'filter', 'completed' ) }">Completed</a>
					</li>
				</ul>
				<button class="clear-completed" on-click="{ this.dispatch( 'clearCompleted' ) }">Clear completed</button>
			</footer>
			{/if}
		</section>
	`,
	onKeyup( e ) {
		if ( e.which === 13 ) {
			this.dispatch( 'add', e.target.value );
			e.target.value = '';
		}
	}
};
