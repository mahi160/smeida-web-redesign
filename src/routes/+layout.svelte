<script>
	import Navigation from '$lib/layouts/navigation.svelte';
	// import { theme } from '$lib/components/theme-changer.svelte';
	import '../app.css';
</script>

<section class="flex flex-col h-screen text-text-800 dark:bg-neutral-800 dark:text-text-100">
	<header class="shadow-sm shadow-primary-100/50 dark:shadow-primary-800/50">
		<Navigation />
	</header>
	<main class="grid items-start justify-center gap-10">
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
