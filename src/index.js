import reo from 'reo';
import App from './components/App';
import todos from './models/todos';
import actions from './actions';
import getters from './getters';

const app = reo();

app.model( todos );
app.getters( getters );
app.actions( actions );
app.router( { routes: [
	{ url: '/', component: App }
] } );

app.start( '#app' );

location.href = '#!/';
