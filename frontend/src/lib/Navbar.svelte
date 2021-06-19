<script lang="ts">
	import user from './user';
</script>

<nav class="bg-white border-b border-gray-500 py-2 px-4 w-full">
	<div class="flex items-center justify-between container mx-auto">
		<a href="/" class="font-bold no-underline">My blog</a>
		<section>
			{#if !$user}
				<a href="/login" class="font-mono no-underline">Login</a>
			{:else}
				<a href="/new" class="font-mono no-underline mr-3">New</a>
				<span class="font-mono text-gray-500">{$user.username}</span>
			{/if}
		</section>
	</div>
</nav>
