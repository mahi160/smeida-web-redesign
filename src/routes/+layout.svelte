<script>
	import Navigation from '$lib/components/navigation.svelte';
	import '../app.css';
</script>

<section class="flex flex-col h-screen gap-5">
	<header class="shadow-md">
		<Navigation />
	</header>
	<main class="container mx-auto md:px-12">
		<slot />
	</main>

	<footer>a footer</footer>
</section>

<style>
	/* section {
		background-image: linear-gradient(
				135deg,
				transparent 0%,
				transparent 6%,
				rgba(71, 71, 71, 0.04) 6%,
				rgba(71, 71, 71, 0.04) 22%,
				transparent 22%,
				transparent 100%
			),
			linear-gradient(
				45deg,
				transparent 0%,
				transparent 20%,
				rgba(71, 71, 71, 0.04) 20%,
				rgba(71, 71, 71, 0.04) 47%,
				transparent 47%,
				transparent 100%
			),
			linear-gradient(
				135deg,
				transparent 0%,
				transparent 24%,
				rgba(71, 71, 71, 0.04) 24%,
				rgba(71, 71, 71, 0.04) 62%,
				transparent 62%,
				transparent 100%
			),
			linear-gradient(
				45deg,
				transparent 0%,
				transparent 73%,
				rgba(71, 71, 71, 0.04) 73%,
				rgba(71, 71, 71, 0.04) 75%,
				transparent 75%,
				transparent 100%
			),
			linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
	} */
</style>
