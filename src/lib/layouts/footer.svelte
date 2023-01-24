<script lang="ts">
	import { Socials } from '$lib/utils/constants';
	import Icon from '$lib/widgets/icon.svelte';

	const lists = [
		{
			title: 'Technology',
			links: [
				{ name: 'Direct Mail', path: '' },
				{ name: 'Smart Offer', path: '' },
				{ name: 'EPM', path: '' }
			]
		},
		{
			title: 'Marketing',
			links: [
				{ name: 'Engaged Facebook Marketing', path: '' },
				{ name: 'Google Marketing', path: '' },
				{ name: 'Bing Marketing', path: '' },
				{ name: 'Acquire Inventory', path: '' }
			]
		},
		{
			title: 'How We Help',
			links: [
				{ name: 'Understand Traffic', path: '' },
				{ name: 'Take a Test Drive', path: '' }
			]
		},
		{
			title: 'About',
			links: [
				{ name: 'Careers', path: '' },
				{ name: 'News Desk', path: '' }
			]
		}
	];
</script>

<section class="pb-5 text-sm">
	<div class="flex items-center justify-center gap-11 mb-4">
		<hr class="border w-full" />
		<img src="/logo/smedia-transparent.svg" alt="" class="w-7 absolute" />
		<hr class="border w-full" />
	</div>
	<div class="flex flex-col sm:flex-row items-start justify-center gap-x-20 gap-y-8 py-5 px-5">
		{#each lists as list}
			<ul>
				<li class="text-base font-semibold mb-2">{list.title}</li>
				{#each list.links as link}
					<li class="hover:underline text-text-500 dark:text-text-400">
						<a href={link.path}>{link.name}</a>
					</li>
				{/each}
			</ul>
		{/each}

		<ul>
			<li class="text-base font-semibold mb-2">Socials</li>
			{#each Socials as social}
				<li class="text-text-500 dark:text-text-400">
					<a
						href={social.path}
						target="_blank"
						rel="noreferrer"
						class="flex items-center justify-start gap-1"
					>
						<Icon
							type="line"
							icon={social.icon}
							className="text-text-500 dark:text-text-400 text-xl"
						/>
						<span class="hover:underline">{social.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex flex-col items-center justify-center text-text-500 mt-4">
		<span>sMedia Ventures Inc. &copy; {new Date().getFullYear()} | All Right Reserved</span>
		<a class="hover:underline" href="/privacy-policy">Privacy Policy</a>
	</div>
</section>
