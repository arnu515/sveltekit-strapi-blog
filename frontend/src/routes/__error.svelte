<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';

	export type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => {
		return { props: { error, status } };
	};
</script>

<script lang="ts">
	export let error: Error;
	export let status: number;
</script>

<div class="fixed w-full h-full grid place-items-center">
	<section class="p-8 border-gray-500 rounded">
		<h1 class="text-center text-4xl font-mono-mt-4">{status}</h1>
		<p class="text-center">{error.message}</p>
	</section>
</div>
