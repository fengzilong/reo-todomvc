export default {
	add( { commit, get }, text ) {
		commit( 'todos/add', text );
	},
	delete( { commit, get }, todo ) {
		commit( 'todos/delete', todo );
	},
	edit( { commit, get }, { todo, text } ) {
		commit( 'todos/edit', { todo, text } );
	},
	toggle( { commit, get }, todo ) {
		commit( 'todos/toggle', todo );
	},
	toggleAll( { commit, get } ) {
		commit( 'todos/toggleAll' );
	},
	clearCompleted( { commit, get } ) {
		commit( 'todos/clearCompleted' );
	},
	// filters
	filter( { commit, get }, filter ) {
		commit( 'todos/filter', filter );
	}
};
