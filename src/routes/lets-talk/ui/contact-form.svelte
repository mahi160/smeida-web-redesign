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

<form class="grid items-start justify-center w-full grid-cols-1 gap-5 h-fit sm:grid-cols-2">
	{#each formFields as _ff, i}
		<div class={_ff.label === 'Message' ? 'col-span-2' : ''}>
			<FormField {..._ff} textarea={_ff.label === 'Message'} rows={10} />
		</div>
	{/each}

	<input type="submit" value="Submit" class="py-2 text-base font-medium rounded shadow cursor-pointer bg-accent-300 sm:w-1/2 hover:bg-accent-300/90 text-text-800"/>
</form>
