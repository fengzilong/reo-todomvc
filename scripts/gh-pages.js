const ghpages = require( 'gh-pages' );
const path = require( 'path' );
const cwd = process.cwd();

ghpages.clean();
ghpages.publish( path.resolve( cwd, 'public' ), {
	logger: function( message ) {
		console.log( message );
	}
}, function() {
	console.log( 'ghpages published' );
} );
