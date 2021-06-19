<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/posts');
		const data = await res.json();

		return { props: { posts: data } };
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types';
	import { goto } from '$app/navigation';

	export let posts: Post[];
</script>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold">My wonderful blog</h1>
</div>

<div class="container mx-auto mt-4">
	{#each posts as post}
		<div
			class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500"
			on:click={() => goto('/blog/' + post.id)}
		>
			<h4 class="font-bold">{post.title}</h4>
			<p class="mt-2 text-gray-800">{post.description}</p>
			<p class="text-gray-500">By: {post.author.username}</p>
		</div>
	{/each}
</div>
