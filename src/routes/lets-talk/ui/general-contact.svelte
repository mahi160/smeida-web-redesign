<script>
	import Icon from '$lib/widgets/icon.svelte';

	const generalContact = [
		{ name: 'Phone', value: '1-306-775-0062', symbol: 'phone' },
		{ name: 'Toll Free', value: '1-855-775-0062', symbol: 'phone_disabled' },
		{ name: 'Email', value: 'sales@smedia.ca', symbol: 'mail' },
		{ name: 'Office Hours', value: 'Monday-Friday: 8 AM – 5 PM CST', symbol: 'work_history' },
		{
			name: 'Office Location',
			value: '300 – 12222 Ewing Ave, Regina, SK, S4M 0A1',
			symbol: 'home_pin'
		}
	];
</script>

<section class="max-w-[22rem] p-6 border-2 rounded border-accent-100 dark:border-accent-500">
	<h2 class="mb-8 text-3xl font-medium">General Contact Information</h2>
	<ul class="grid items-center justify-center gap-4 mt-5">
		{#each generalContact as _gc, i}
			<li class="flex flex-col gap-1">
				<b class="flex items-center justify-start gap-2 text-sm font-semibold text-primary-500">
					<Icon type="mat" icon={_gc.symbol} />
					{_gc.name}:
				</b>
				<span class="col-span-2 ml-1 text-xl text-text-600 dark:text-text-200">
					{#if i < 2}
						<a href="tel:{_gc.value}" class="hover:underline">
							{_gc.value}
						</a>
					{:else if i === 2}
						<a href="mailto:{_gc.value}" class="hover:underline">
							{_gc.value}
						</a>
					{:else}
						<p>{_gc.value}</p>
					{/if}
				</span>
			</li>
		{/each}
	</ul>
</section>
