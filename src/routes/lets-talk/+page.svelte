<script>
	import ContactForm from './ui/contact-form.svelte';
	import GeneralContact from './ui/general-contact.svelte';
</script>

<section class="relative w-full h-full p">
	<img
		src="/assets/home/animated_blob.svg"
		class="absolute z-0 hidden w-full h-full sm:block opacity-30 dark:opacity-100"
		alt=""
	/>
	<section class="container relative z-10 mx-auto mt-5 bg-transparent sm:mt-10">
		<div class="flex flex-col items-center justify-center gap-2">
			<h1 class="text-2xl font-semibold text-center md:text-4xl sm:text-5xl text-primary-500">
				Let's Connect
			</h1>
			<h3 class="text-base text-center sm:text-2xl text-text-500 dark:text-text-400">
				We'd love to help you exceed your sales & marketing goals
			</h3>
		</div>
		<div
			class="relative z-10 flex flex-col-reverse max-w-6xl gap-5 p-4 mx-auto mt-2 mb-5 rounded sm:gap-10 sm:my-10 sm:p-8 sm:shadow sm:flex-row dark:shadow-primary-500/50"
		>
			<GeneralContact />
			<ContactForm />
		</div>
	</section>
</section>
