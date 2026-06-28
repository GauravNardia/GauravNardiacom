export interface Project {
	id: string;
	name: string;
	description: string;
	url: string;
}

export const projects: Project[] = [
	{
		id: "bettervercel",
		name: "Better Vercel",
		description: "Self-hosted vercel alternative",
		url: "https://better-vercel.com",
	},
	{
		id: "puffinanalytics",
		name: "Puffina Analytics",
		description: "Simple privacy-first web analytics",
		url: "https://puffinanalytics.com",
	},
	{
		id: "trybit",
		name: "Trybit",
		description: "Realtime developer betting app",
		url: "https://trybit.gauravnardia.com",
	},
	{
		id: "httpprotocol",
		name: "HTTP Protocol",
		description: "Http protocol",
		url: "https://github.com/GauravNardia/tcp-protocol",
	},
	{
		id: "chess",
		name: "Chess",
		description: "Realtime multiplayer chess game",
		url: "https://github.com/GauravNardia/chess",
	},
];
