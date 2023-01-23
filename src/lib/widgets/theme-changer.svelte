<script lang="ts">
	import { fade } from 'svelte/transition';

	$: darkMode = true;
	const toggleTheme = () => {
		darkMode = !darkMode;
		darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	};
</script>

{#key darkMode}
	<button on:click={toggleTheme} in:fade>
		<box-icon color="#219cfe" name={darkMode ? 'sun' : 'moon'} animation="tada-hover" />
		<!-- <MatSymbol symbol={darkMode ? 'dark_mode' : 'light_mode'} /> -->
	</button>
{/key}
