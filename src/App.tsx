import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Writing } from "./pages/Writing";
import { WritingDetail } from "./pages/WritingDetail";
import { Favorites } from "./pages/Favorites";
import { Photography } from "./pages/Photography";
import { AdminPhotos } from "./pages/AdminPhotos";
import { Helmet } from "react-helmet";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
	return (
		<Router>
			<Helmet>
				<title>Gaurav Nardia aka @gaurav_nardia</title>
				<meta
					name='description'
					content='Product designer, founder, and photographer based in San Francisco. Currently building Peerlist and AutoSend.'
				/>
				<meta name='author' content='Gaurav Nardia' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<html lang='en' />

				{/* Open Graph / Social Media */}
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Gaurav Nardia aka @gaurav_nardia' />
				<meta
					property='og:description'
					content='Product designer, founder, and photographer based in San Francisco. Currently building Peerlist and AutoSend.'
				/>
				<meta property='og:site_name' content='gaurav_nardia.com' />
				<meta property='og:url' content='https://www.gauravnardia.com' />
				<meta property='og:image' content='https://www.gauravnardia.com/assets/og-images/og-home.jpg' />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />

				{/* Twitter */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@gaurav_nardia' />
				<meta name='twitter:site' content='@gaurav_nardia' />
				<meta name='twitter:title' content='Gaurav Nardia aka @gaurav_nardia' />
				<meta
					name='twitter:description'
					content='Product designer, founder, and photographer based in San Francisco. Currently building Peerlist and AutoSend.'
				/>
				<meta
					name='twitter:image'
					content='https://www.gauravnardia.com/assets/og-images/og-home.jpg'
				/>

				{/* Theme color */}
				<meta name='theme-color' content='#fbfbf7' media='(prefers-color-scheme: light)' />
				<meta name='theme-color' content='#1f1f1a' media='(prefers-color-scheme: dark)' />

				{/* JSON-LD Structured Data */}
				<script type='application/ld+json'>
					{JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "Person",
								"@id": "https://www.gauravnardia.com/#person",
								name: "Gaurav Nardia",
								alternateName: "@gaurav_nardia",
								url: "https://www.gauravnardia.com",
								image: "https://www.gauravnardia.com/profile-image.jpg",
								jobTitle: "Full Stack Developer and Thinker",
								description:
									"Product designer, founder, and photographer based in San Francisco. Currently building Peerlist and AutoSend.",
								address: {
									"@type": "PostalAddress",
									addressLocality: "San Francisco",
									addressRegion: "CA",
									addressCountry: "US",
								},
								sameAs: [
									"https://x.com/gaurav_nardia",
									"https://peerlist.io/gauravnardia",
								],
							},
							{
								"@type": "WebSite",
								"@id": "https://www.gauravnardia.com/#website",
								url: "https://www.gauravnardia.com",
								name: "Gaurav Nardia - @gaurav_nardia",
								description:
									"Product designer, founder, and photographer based in San Francisco. Currently building Peerlist and AutoSend.",
								publisher: {
									"@id": "https://www.gauravnardia.com/#person",
								},
								inLanguage: "en-US",
							},
						],
					})}
				</script>
			</Helmet>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/writing' element={<Writing />} />
				<Route path='/writing/:id' element={<WritingDetail />} />
				<Route path='/favorites' element={<Favorites />} />
				{/* <Route path='/photography' element={<Photography />} />
				<Route path='/admin/photos' element={<AdminPhotos />} /> */}
			</Routes>
			<Analytics />
		</Router>
	);
}
