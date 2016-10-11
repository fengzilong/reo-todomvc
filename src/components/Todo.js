export default {
	template: `
		<li
			class="{ todo.done ? 'completed' : '' } { editing ? 'editing' : '' }"
			on-dblclick="{ editing = true }"
		>
			<div class="view">
				<input
					class="toggle"
					type="checkbox"
					on-click="{ this.dispatch( 'toggle', todo ) }"
					{#if todo.done}checked{/if}
				>
				<label>{ todo.text }</label>
				<button class="destroy" on-click="{ this.dispatch( 'delete', todo ) }"></button>
			</div>

			{#if editing}
			<input
				class="edit"
				value="{ todo.text }"
				on-blur="{ this.onBlur() }"
				on-keyup="{ this.onKeyup() }"
			>
			{/if}
		</li>
	`,
	onBlur( e ) {
		this.save( e.target.value );
	},
	onKeyup( e ) {
		if ( e.which === 13 ) {
			this.save( e.target.value );
		}
	},
	save( value ) {
		this.data.editing = false;
		this.dispatch( 'edit', value )
	}
};
