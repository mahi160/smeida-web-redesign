<script lang="ts">
	import { onMount } from 'svelte';

	const products = [
		{ name: 'Smart Offer', link: '', color: 'text-sky-500' },
		{ name: 'DataSherpa', link: '', color: 'text-indigo-500' },
		{ name: 'Performance Dashboard', link: '', color: 'text-green-500' },
		{ name: 'Engaged Prospect Metric', link: '', color: 'text-amber-500' }
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

<a href={products[index].link}>
	<button
		class="rounded-md py-1 px-5 shadow-sm text-sm lg:text-xl font-semibold {products[index]
			.color}"
	>
		{products[index].name}
	</button>
</a>
