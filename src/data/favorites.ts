export interface Favorite {
	id: string;
	name: string;
	description: string;
	url: string;
	category: "Product" | "People" | "Site" | "Font" | "Movie";
	nofollow?: boolean; // Optional: if false, nofollow won't be added
}

export const favorites: Favorite[] = [
	{
		id: "peerlist",
		name: "Peerlist",
		description: "My favorite place.",
		url: "https://peerlist.io",
		category: "Product",
	},
	{
		id: "puffin",
		name: "Puffin Analytics",
		description: "Product I use daily",
		url: "https://puffinanalytics.com",
		category: "Product",
	},
	{
		id: "X",
		name: "X",
		description: "This is where you can find me anytime",
		url: "https://x.com/",
		category: "Product",
	},
	{
		id: "wispr",
		name: "Wispr Flow",
		description: "Product I love to use",
		url: "https://wisprflow.ai/",
		category: "Product",
	},
	{
		id: "akash-bhadange",
		name: "Akash Bhadange",
		description: "Favorite person to seek advice from",
		url: "https://www.designerdada.com",
		category: "People",
	},
	{
		id: "erasorio",
		name: "Erasor",
		description: "Mood board before building anything",
		url: "https://www.eraser.io/",
		category: "Site",
	},
	{
		id: "alexchris",
		name: "Alex Hormozi & Chrish",
		description: "Go to video when I feel down",
		url: "https://www.youtube.com/watch?v=Wy7CTJcfiM4",
		category: "Site",
	},
	{
		id: "elonmusk",
		name: "Elon Musk",
		description: "My hero",
		url: "https://x.com/elonmusk",
		category: "People",
	},
	{
		id: "kunal",
		name: "Kunal Shah",
		description: "Our thinking aligns",
		url: "https://x.com/kunalb11",
		category: "People",
	},
	

];
