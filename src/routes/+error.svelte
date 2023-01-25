<script>
	const links = [
		{ name: 'Home', path: '/' },
		{ name: "Let's Talk", path: '/lets-talk' }
	];
</script>

<section class="flex items-center justify-center w-full h-full gap-2 py-10">
  <img src="/assets/error/404.svg" alt="" class="w-80">
	<h1 class="px-6 font-semibold border-r-2 text-8xl text-primary-500 border-r-neutral-200">404</h1>
	<div class="flex flex-col gap-1 pl-4">
		<h2 class="text-5xl font-medium">Page Not Found</h2>
		<ul class="flex">
			{#each links as link}
				<li class="px-2 border-r text-primary-400 hover:underline last:border-r-0 first:pl-0">
					<a href={link.path}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</section>