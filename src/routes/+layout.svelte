<script>
	import Navigation from '$lib/layouts/navigation.svelte';
	// import { theme } from '$lib/components/theme-changer.svelte';
	import '../app.css';
</script>

<section
	class="flex flex-col min-h-screen h-full text-text-800 dark:bg-neutral-800 dark:text-text-100"
>
	<header class="shadow-sm shadow-primary-100/50 dark:shadow-primary-800/50">
		<Navigation />
	</header>
	<main class="grid gap-10">
		<slot />
	</main>

	<footer>a footer</footer>
</section>
