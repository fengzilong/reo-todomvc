export default saveKey => store => {
	store.subscribe( ( action, state ) => {
		localStorage.setItem( saveKey, JSON.stringify( state.todos.todos ) );
	} );
};
