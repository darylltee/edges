export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/landing/OnePage": [3],
		"/landing/OnePage/client": [4],
		"/landing/OnePage/contact": [5],
		"/landing/OnePage/counter": [6],
		"/landing/OnePage/cta": [7],
		"/landing/OnePage/faq": [8],
		"/landing/OnePage/features": [9],
		"/landing/OnePage/footer": [10],
		"/landing/OnePage/home": [11],
		"/landing/OnePage/navbar": [12],
		"/landing/OnePage/products": [13],
		"/landing/OnePage/reviews": [14],
		"/landing/OnePage/services": [15],
		"/landing/OnePage/team": [16],
		"/landing/OnePage/workProcess": [17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';