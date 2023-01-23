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

<section class="max-w-[22rem] p-4 sm:p-6 border-2 rounded border-accent-100 dark:border-accent-500">
	<h2 class="text-xl font-medium sm:mb-8 sm:text-3xl">General Contact Information</h2>
	<ul class="grid items-center justify-center gap-4 mt-5">
		{#each generalContact as _gc, i}
			<li class="grid grid-cols-3 gap-1 sm:grid-cols-1">
				<b class="flex items-center justify-start gap-2 text-sm font-semibold text-primary-500">
					<Icon type="mat" icon={_gc.symbol} className="hidden sm:block" />
					{_gc.name}:
				</b>
				<span class="col-span-2 ml-1 text-sm sm:text-xl text-text-600 dark:text-text-200">
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
