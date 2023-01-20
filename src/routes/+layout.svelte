<script>
	import Navigation from '$lib/components/navigation.svelte';
	import '../app.css';
</script>

<section class="h-screen flex flex-col gap-5">
	<header class="shadow-md">
		<Navigation />
	</header>
	<main>
		<slot />
	</main>

	<footer>a footer</footer>
</section>
