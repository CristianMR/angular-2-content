import {bootstrap} from 'angular2/platform/browser';
import {Application} from './app.ts';

// iniciamos la aplicación
bootstrap(Application, [])
.then(function () {
	console.log('Se inicio angular');
})
.catch(function (error) {
	console.error(error);
});