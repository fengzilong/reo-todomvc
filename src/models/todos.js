const todos = JSON.parse( window.localStorage.getItem( 'reo-todos' ) || '[]' );

export default {
	name: 'todos',
	state: {
		todos,
		filteredTodos: [],
		filter: 'all'
	},
	reducers: {
		add( state, text ) {
			state.todos.push( {
				text,
				done: false
			} );
			doFilter( state );
		},
		delete( state, todo ) {
			const index = state.todos.indexOf( todo );
			if ( ~index ) {
				state.todos.splice( index, 1 );
			}
			doFilter( state );
		},
		edit( state, { todo, text } ) {
			todo.text = text;
		},
		toggle( state, todo ) {
			todo.done = !todo.done;
			doFilter( state );
		},
		toggleAll( state ) {
			state.todos.forEach( todo => todo.done = !todo.done );
			doFilter( state );
		},
		clearCompleted( state ) {
			state.todos = state.todos.filter( todo => !todo.done );
			doFilter( state );
		},
		// filters
		filter: doFilter
	},
};

function doFilter( state, filter ) {
	if ( filter ) {
		state.filter = filter;
	}

	switch( state.filter ) {
		case 'all':
			state.filteredTodos = state.todos;
			break;
		case 'active':
			state.filteredTodos = state.todos.filter( todo => !todo.done );
			break;
		case 'completed':
			state.filteredTodos = state.todos.filter( todo => todo.done );
			break;
	}
}
