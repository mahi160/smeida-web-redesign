<script>
	const achievements = [
		{
			title: 'Google Partner',
			img: '/assets/home/google_partner.png',
			desc: 'sMedia is a Google Premier Partner, which puts us in the top 3% of participating companies.',
			className: 'google'
		},
		{
			title: 'Meta Partner',
			img: '/assets/home/facebook_partner.png',
			desc: 'We’re also proud to be a Meta partner.',
			className: 'fb'
		},
		{
			title: 'Govt. of Saskatchewan',
			img: '/assets/home/gov_of_saska.jpg',
			desc: 'In 2018, we were recognized by the Government of Saskatchewan for our 4800% growth rate from 2013 to 2017.',
			className: 'sask'
		},
		{
			title: 'Growth',
			img: '/assets/home/awards_2.png',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, illum quae enim voluptas ex culpa.',
			className: 'growth'
		}
	];
</script>

<section class="container px-5 pb-10 mx-auto sm:p-20 sm:pt-0">
	<h2
		class="max-w-lg pb-6 mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-primary-500"
	>
		Our Achievements
	</h2>

	<div class="achievements">
		{#each achievements as achievement, i}
			<div
				class="{achievement.className} border-2 border-accent-200 dark:border-accent-600 rounded-lg p-4 gap-4 flex flex-col items-center justify-center"
			>
				<div class="p-3">
					<img class={i < 3 ? 'h-28' : 'h-full'} src={achievement.img} alt={achievement.title} />
				</div>
				{#if i < 3}
					<div>
						<h3 class="font-semibold ">{achievement.title}</h3>
						<p>{achievement.desc}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.achievements {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		gap: 24px 24px;
		grid-auto-flow: row;
		grid-template-areas:
			'google fb growth growth'
			'sask sask growth growth';
		.google {
			grid-area: google;
		}
		.fb {
			grid-area: fb;
		}
		.sask {
			grid-area: sask;
		}
		.growth {
			grid-area: growth;
		}
	}
</style>
