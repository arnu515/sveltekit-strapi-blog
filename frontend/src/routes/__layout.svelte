<script lang="ts">
	import '../app.postcss';
	import userStore from '$lib/user';
	import type { User } from '$lib/types';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';

	let loading = true;

	onMount(async () => {
		// Check if 'token' exists in localStorage
		if (!localStorage.getItem('token')) {
			loading = false;
			return { props: { user: null } };
		}

		// Fetch the user from strapi
		const res = await fetch('http://localhost:1337/auth/me', {
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
		});
		const user: User = await res.json();
		loading = false;
		if (res.ok) {
			$userStore = user;
		}
	});
</script>

{#if !loading}
	<Navbar />
	<slot />
{/if}
