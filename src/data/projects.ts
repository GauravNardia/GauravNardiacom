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
		description: "Realtime developer betting app (made me $400 in 2 months)",
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

export const experience: Project[] = [
	{
		id: "peerlist",
		name: "Peerlist",
		description: "Software Engineer - AUG.2025 - JAN.2026",
		url: "https://peerlist.io",
	},
	{
		id: "klavish",
		name: "Klavish AI",
		description: "Open Source Contributor - AUG.2025 - JAN.2026",
		url: "https://www.klavis.ai",
	},
	{
		id: "nimbus",
		name: "Nimbus Storage",
		description: "Open Source Contributor - AUG.2025 - JAN.2026",
		url: "https://nimbus.storage",
	}
];
