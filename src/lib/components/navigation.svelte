<script lang="ts">
	import { Routes } from '$lib/utils/routes';
</script>

<nav class="container mx-auto p-4 flex items-center justify-between">
	<div class="logo">
		<img src="/logo/named-black.svg" alt="sMedia Ventures" />
	</div>

	<ul class="flex items-center justify-end gap-4">
		{#each Routes as route}
			<li>
				<span>{route.name}</span>
				<ul class="hidden">
					{#each route.children as child}
						<li>
							<a href={child.path}>{child.name}</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</nav>
