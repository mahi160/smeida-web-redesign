<script lang="ts">
	export let type: 'mat' | 'line';
	export let icon: string;
	export let className: string = 'text-primary-500 dark:text-primary-400';
</script>

{#if type === 'mat'}
	<span class="material-symbols-outlined {className}"> {icon} </span>
{:else}
	<i class="{icon} text-3xl {className}" />
{/if}

<style>
	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48;
	}
</style>
