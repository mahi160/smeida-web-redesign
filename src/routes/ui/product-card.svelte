<script lang="ts">
		export let imgSrc: string;
	export let title: string;
	export let description: string;
</script>

<div
	class="flex flex-col gap-3 p-5 rounded cursor-pointer ring-2 ring-neutral-500 hover:ring-primary-400"
>
	<div
		class="flex items-center justify-center px-4 pt-5 pb-5 border-b border-gray-200 border-none sm:px-6"
	>
		<img class="w-full max-w-xs aspect-video" src={imgSrc} alt={title} />
	</div>

	<h3 class="text-xl font-semibold text-text-800">{title}</h3>
	<p class="text-text-500">{description}</p>
</div>
