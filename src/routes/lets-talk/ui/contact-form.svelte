<script>
	import FormField from '$lib/components/form-field.svelte';
	const formFields = [
		{ label: 'First Name', type: 'text', required: true },
		{ label: 'Last Name', type: 'text', required: true },
		{ label: 'Email', type: 'email', required: true },
		{ label: 'URL', type: 'url', required: false },
		{ label: 'Message', type: 'text', required: true }
	];
</script>

<form
	class="grid items-start justify-center w-full grid-cols-1 gap-5 p-4 rounded shadow sm:shadow-none h-fit sm:grid-cols-2"
>
	{#each formFields as _ff, i}
		<div class={_ff.label === 'Message' ? 'sm:col-span-2' : ''}>
			<FormField {..._ff} textarea={_ff.label === 'Message'} rows={10} />
		</div>
	{/each}

	<input
		on:click|once|preventDefault={() => {}}
		type="submit"
		value="Submit"
		class="px-5 py-2 text-base font-medium tracking-wider text-white rounded shadow-lg cursor-pointer bg-accent-500 sm:w-1/2 hover:bg-accent-400"
	/>
</form>
