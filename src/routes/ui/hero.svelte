<script>
	import HeroProduct from '$lib/widgets/hero-product.svelte';
</script>

<div
	class="container grid items-center justify-center grid-cols-1 px-16 py-5 mx-auto md:grid-cols-2"
>
	<article class="flex flex-col items-center justify-center sm:items-start gap-y-8">
		<HeroProduct />
		<div>
			<h1
				class="max-w-2xl mb-4 text-5xl font-semibold text-center text-gray-900 sm:text-left md:text-6xl lg:text-7xl"
			>
				Be More Efficient
			</h1>
			<h3
				class="max-w-2xl mb-2 text-3xl font-semibold tracking-widest text-center sm:text-left md:text-6xl lg:text-5xl text-sky-500"
			>
				Buy & Sell More
			</h3>
		</div>
		<p
			class="max-w-lg px-4 text-xl leading-8 text-center text-gray-500 sm:w-4/5 sm:text-left dark:text-gray-100 sm:px-0"
		>
			sMedia is focused on empowering automotive and recreational dealerships with the technology
			required to be a driving force in the <span class="underline">digital transformation</span> of
			the industry
		</p>
		<div class="flex flex-col items-center justify-center mt-6 sm:flex-row">
			<a href="/lets-talk">
				<button
					class="px-20 py-2 text-2xl font-semibold border-2 border-orange-500 rounded-md bg-orange-50"
					>Learn How</button
				>
			</a>
		</div>
	</article>
	<section class="hidden sm:block">
		<img class="aspect-video" src="/assets/home/home-top.png" alt="Hero" />
	</section>
</div>
