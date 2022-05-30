/**
 * main pricipal del proyecto, este es el que se carga en el index.html
 */

//import styles
import './styles.css';
//import bootsrap si lo necesitas
//import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * importamos el modulo de forma simple para que no ejecute como funcion, sino hasta que sea llamado en el componentes.js
 * en este archivo esta construida toda la logica del proyecto...
 * 
 */
import( /* webpackChunkName: "componentes" */ './js/componentes' );