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
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about-us/community-influence": [3],
		"/about-us/farmer-beneficiaries": [4],
		"/about-us/how-we-do-it": [5],
		"/about-us/implications": [6],
		"/about-us/our-goals": [7],
		"/about-us/our-outputs": [8],
		"/about-us/our-team": [9],
		"/accross": [10],
		"/client": [11],
		"/contact": [12],
		"/counter": [13],
		"/cta": [14],
		"/faq": [15],
		"/farming": [16],
		"/features": [17],
		"/footer": [18],
		"/geomap": [19],
		"/home": [20],
		"/navbar": [21],
		"/our-work/farming": [22],
		"/our-work/geomapping": [23],
		"/our-work/profiling": [24],
		"/products": [25],
		"/reviews": [26],
		"/services": [27],
		"/team": [28],
		"/workProcess": [29]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';