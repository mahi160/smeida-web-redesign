<script>
	import ProductCard from './product-card.svelte';

	const products = [
		{
			imgSrc: '/assets/home/traffic.svg',
			title: 'Understand Traffic',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit amet voluptatum possimus est similique odio quos mollitia corporis facere commodi quas.'
		},
		{
			imgSrc: '/assets/home/popup.svg',
			title: 'Increase Quality Leads',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit amet voluptatum possimus est similique odio quos mollitia corporis facere commodi quas.'
		},
		{
			imgSrc: '/assets/home/grow.svg',
			title: 'Grow Sales',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit amet voluptatum possimus est similique odio quos mollitia corporis facere commodi quas.'
		}
	];
</script>

<section class="flex flex-col pt-5">
	<h2
		class="max-w-lg pb-6 text-3xl font-semibold text-text-800 md:text-4xl lg:text-5xl sm:max-w-xl md:max-w-3xl lg:max-w-4xl"
	>
		We Help You Understand
		<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-400">
			Your Business
		</span>
	</h2>
	<p class="text-lg text-text-500 xl:text-xl 2xl:text-2xl sm:max-w-xl md:max-w-3xl lg:max-w-6xl">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit asperiores atque harum nemo
		reiciendis distinctio incidunt enim ut itaque.
		<strong>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, delectus.
		</strong>
	</p>
</section>

<section class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
	{#each products as product}
		<ProductCard {...product} />
	{/each}
</section>
