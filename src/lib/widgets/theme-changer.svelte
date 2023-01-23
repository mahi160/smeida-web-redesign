<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from './icon.svelte';

	$: darkMode = true;
	const toggleTheme = () => {
		darkMode = !darkMode;
		darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	};
</script>

{#key darkMode}
	<button class="flex items-center justify-center" on:click={toggleTheme} in:fade>
		<Icon type="mat" icon={!darkMode ? 'dark_mode' : 'light_mode'} />
	</button>
{/key}
