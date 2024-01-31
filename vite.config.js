import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// base: process.env.NODE_ENV === 'production'
	// 	? '/cryptography-app-svelte/tree/gh-pages'
	// 	: "/",
	base: "/",
	plugins: [sveltekit()],
});
