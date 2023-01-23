<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const products = [
		{ name: 'Smart Offer', link: '', color: 'text-sky-500' },
		{ name: 'DataSherpa', link: '', color: 'text-indigo-500' },
		{ name: 'Performance Dashboard', link: '', color: 'text-green-500' },
		{ name: 'Engaged Prospect Metric', link: '', color: 'text-purple-500' }
	];
	let index = 0;
	onMount(() => {
		setInterval(() => {
			index++;
			if (index > products.length - 1) {
				index = 0;
			}
		}, 5000);
	});
</script>

{#key products[index]}
	<a href={products[index].link} in:fade={{ duration: 1500 }}>
		<button class="text-xl font-semibold {products[index].color} underline underline-offset-4">
			{products[index].name}
		</button>
	</a>
{/key}
