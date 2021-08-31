import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Arthur from '../pages/Arthur';
import Nando from '../pages/Nando';
import Sean from '../pages/Sean';
import Teo from '../pages/Teo';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	},
	{
		Component: Arthur,
		key: 'Arthur',
		path: '/arthur'
	},
	{
		Component: Nando,
		key: 'Nando',
		path: '/nando'
	},
	{
		Component: Sean,
		key: 'Sean',
		path: '/sean'
	},
	{
		Component: Teo,
		key: 'Teo',
		path: '/teo'
	}
];

export default routes;
