export type ModelRoute = {
	name: string;
	icon: string;
	children: { name: string; path: string; icon: string }[];
};
export const Routes: ModelRoute[] = [
	{
		name: 'Marketing',
		icon: '',
		children: [
			{ name: 'Facebook Marketing', path: 'marketing/fb', icon: '' },
			{ name: 'Google Marketing', path: 'marketing/google', icon: '' },
			{ name: 'Google Vehicle Ads', path: 'marketing/google-va', icon: '' },
			{ name: 'Microsoft Marketing', path: 'marketing/ms', icon: '' },
			{ name: 'Microsoft Auto Ads', path: 'marketing/ms-auto', icon: '' },
			{ name: 'Recreation & Heavy Equipment', path: 'marketing/rv', icon: '' }
		]
	},
	{
		name: 'Leads',
		icon: '',
		children: [
			{ name: 'Smart Offer', path: 'leads/smart-offer', icon: '' },
			{ name: 'Direct Mail Retargeting', path: 'leads/direct-mail-retargeting', icon: '' }
		]
	}
];
