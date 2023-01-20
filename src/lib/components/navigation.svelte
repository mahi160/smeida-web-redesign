<script lang="ts">
	import { Routes } from '$lib/utils/routes';
</script>

<nav class="container mx-auto p-4 flex items-center justify-between">
	<div class="logo">
		<img class="dark:hidden block" src="/logo/named-black.svg" alt="sMeida" />
		<img class="hidden dark:block" src="/logo/named-white.svg" alt="sMeida" />
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
