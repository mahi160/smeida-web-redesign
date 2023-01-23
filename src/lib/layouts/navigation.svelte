<script lang="ts">
	import { Routes } from '$lib/utils/routes';
	import Icon from '$lib/widgets/icon.svelte';
	import ThemeChanger from '../widgets/theme-changer.svelte';

	const socials = [
		{ name: 'Facebook', icon: 'lab la-facebook', path: 'https://www.facebook.com/sMedia.ca/' },
		{
			name: 'Linkedin',
			icon: 'lab la-linkedin',
			path: 'https://www.linkedin.com/company/smedia.ca'
		}
	];
</script>

<nav class="container mx-auto p-4 flex items-center justify-between">
	<a class="logo" href="/">
		<img class="dark:hidden block w-40" src="/logo/named-black.svg" alt="sMedia Ventures" />
		<img class="hidden dark:block w-40" src="/logo/named-white.svg" alt="sMedia Ventures" />
	</a>

	<ul class="flex items-center justify-end gap-4">
		{#each Routes as route}
			<li>
				<span>{route.name}</span>
				<ul class="hidden">
					{#each route.children as child}
						<li>
							<a href={child.path}>{child.name}</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
	<ul class="flex items-center justify-end gap-2 opacity-80">
		{#each socials as social}
			<li>
				<a href={social.path} target="_blank" rel="noreferrer">
					<Icon type="line" icon={social.icon} className="text-primary-500" />
				</a>
			</li>
		{/each}

		<li><ThemeChanger /></li>
	</ul>
</nav>
