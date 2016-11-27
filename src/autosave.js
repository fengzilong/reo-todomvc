export default saveKey => ( Base, store ) => {
	store.subscribe( ( action, state ) => {
		localStorage.setItem( saveKey, JSON.stringify( state.todos.todos ) );
	} );
};
