<script>
	import Icon from '$lib/widgets/icon.svelte';

	const ratings = [
		{ title: 'dealerships work with us', value: '450+', logo: 'directions_car' },
		{ title: 'average client rating', value: '8 / 9', logo: 'auto_awesome' },
		{ title: 'dealer retention rate', value: '98%', logo: 'mood' }
	];
</script>

<section class="relative w-full mx-auto">
	<div class="container mx-auto px-5 pb-10 sm:px-20 sm:pt-0">
		<h2
			class="max-w-lg pb-6 mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-primary-500"
		>
			What Our Clients Think!
		</h2>

		<div class="flex flex-col sm:flex-row items-center justify-evenly gap-10">
			{#each ratings as rating}
				<div class="flex items-center justify-center flex-col gap-4">
					<Icon type="mat" icon={rating.logo} className="text-6xl sm:text-8xl text-accent-400" />
					<h1 class="text-5xl sm:text-7xl font-bold text-primary-500">{rating.value}</h1>
					<p class="text-center tracking-wider">{rating.title}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* section {
		background-image: url('assets/home/rating.jpg');
		background-blend-mode: color;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	} */
</style>
