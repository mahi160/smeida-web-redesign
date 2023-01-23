<script lang="ts">
	export let label: string;
	export let type: string = 'text';
	export let required: boolean = false;
	export let placeholder: string = '';
	export let textarea = false;
	export let rows: number = 4;
	$: name = label.replaceAll(/ /g, '_').toLocaleLowerCase();
	$: ph = !placeholder ? 'Please Enter ' + label : placeholder;
</script>

<div class="flex flex-col gap-2">
	<label
		for={name}
		class="text-lg font-medium text-text-500 dark:text-text-400 {required ? 'required' : ''}"
		>{label}</label
	>
	{#if !textarea}
		<input
			{type}
			class="px-3 py-3 text-base bg-white border rounded-lg dark:bg-neutral-800 border-neutral-500 dark:border-neutral-600 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 caret-primary-500"
			maxlength="256"
			{name}
			data-name={name}
			placeholder={ph}
			{required}
			id={name}
		/>
	{:else}
		<textarea
			class="px-3 py-3 text-base bg-white border rounded-lg dark:bg-neutral-800 border-neutral-500 dark:border-neutral-600 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 caret-primary-500"
			{name}
			data-name={name}
			placeholder={ph}
			{required}
			id={name}
			{rows}
		/>
	{/if}
</div>

<style>
	.required::after {
		content: '*';
		margin-left: 4px;
		font-size: 16px;
	}
</style>
