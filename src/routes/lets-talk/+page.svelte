<script>
	import ContactForm from './ui/contact-form.svelte';
	import GeneralContact from './ui/general-contact.svelte';
</script>

<section class="flex flex-col items-center justify-center gap-2 text-text-700">
	<h1 class="text-2xl font-semibold md:text-4xl lg:text-5xl">Let's Connect</h1>
	<h3 class="text-2xl text-text-500">We'd love to help you exceed your sales & marketing goals</h3>
</section>
<div class="container flex max-w-6xl gap-10 p-8 mx-auto mt-10 rounded shadow">
	<GeneralContact />
	<ContactForm />
</div>
