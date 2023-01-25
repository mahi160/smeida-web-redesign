<script lang="ts">
	export let imgSrc: string;
	export let title: string;
	export let description: string;
	export let buttonHeader: string;
	export let path: string;
</script>

<div
	class="flex flex-col gap-3 p-5 rounded cursor-pointer ring-2 ring-neutral-500 dark:ring-neutral-700"
>
	<div class="flex items-center justify-center pt-2">
		<img class="w-full max-w-xs aspect-video" src={imgSrc} alt={title} />
	</div>

	<h3 class="text-xl font-semibold">{title}</h3>
	<p class="text-text-500 dark:text-text-400">{description}</p>
	<a href={path} class="flex items-center justify-center w-full mt-3">
		<button
			class="px-3 py-2 text-sm font-semibold text-white rounded bg-accent-500 hover:bg-accent-400"
		>
			{buttonHeader}
		</button>
	</a>
</div>
