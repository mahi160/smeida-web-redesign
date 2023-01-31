<script>
	import Footer from '$lib/layouts/footer.svelte';
	import Navigation from '$lib/layouts/navigation.svelte';
	import '../app.css';
</script>

<section
	class="flex flex-col h-full min-h-screen text-text-800 dark:bg-neutral-800 dark:text-text-100"
>
	<header class="shadow-sm shadow-primary-100/50 dark:shadow-primary-800/50">
		<Navigation />
	</header>
	<main class="grid gap-10 min-h-[calc(100vh-324px)]">
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</section>
