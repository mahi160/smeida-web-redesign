<script>
	import ContactForm from './ui/contact-form.svelte';
	import GeneralContact from './ui/general-contact.svelte';
</script>

<section class="relative w-full h-full p">
	<img
		src="/assets/home/animated_blob.svg"
		class="absolute w-full h-full opacity-30 dark:opacity-100 z-0"
		alt=""
	/>
	<section class="flex flex-col items-center justify-center gap-2 mt-10 relative z-10">
		<h1 class="text-2xl font-semibold md:text-4xl lg:text-5xl">Let's Connect</h1>
		<h3 class="text-2xl text-text-500 dark:text-text-400">
			We'd love to help you exceed your sales & marketing goals
		</h3>
	</section>
	<div class="flex max-w-6xl gap-10 p-8 mx-auto my-10 rounded shadow dark:shadow-primary-500/50 relative z-10">
		<GeneralContact />
		<ContactForm />
	</div>
</section>
