<script>
	import ProductCard from './product-card.svelte';

	const products = [
		{
			// imgSrc: '/assets/home/traffic.svg',
			imgSrc: '/assets/home/features_1.png',
			title: 'Understand Traffic',
			description:
				'By showing the right car to the right buyer, we increase the number of engaged prospects who come to your VDPs.',
			buttonHeader: 'Maximize Engagement',
			path: '/engage'
		},
		{
			imgSrc: '/assets/home/features_2.png',
			// imgSrc: '/assets/home/popup.svg',
			title: 'Increase Quality Leads',
			description:
				'By employing tools like Smart Offer you can increase the likelihood of a lead conversion even further.',
			buttonHeader: 'Optimize Digital Shopping',
			path: '/smart-offer'
		},
		{
			imgSrc: '/assets/home/features_3.png',
			// imgSrc: '/assets/home/grow.svg',
			title: 'Grow Sales',
			description:
				'Our services generate more high-quality VDP traffic per dollar than any other advertising channels',
			buttonHeader: 'Lorem, ipsum.',
			path: '/data-sherpa'
		}
	];
</script>

<section class="container px-5 pb-10 mx-auto sm:p-20 sm:pt-0">
	<section class="flex flex-col pt-5">
		<h2
			class="max-w-lg pb-6 text-3xl font-semibold md:text-4xl lg:text-5xl sm:max-w-xl md:max-w-3xl lg:max-w-4xl"
		>
			We Help You Understand
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-500">
				Your Business
			</span>
		</h2>
		<p
			class="text-lg text-text-500 dark:text-text-400 xl:text-xl 2xl:text-2xl sm:max-w-xl md:max-w-3xl lg:max-w-6xl"
		>
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
</section>
