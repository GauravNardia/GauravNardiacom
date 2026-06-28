/**
 * Site Configuration
 *
 * This file contains all personal/site-specific information.
 * When forking this project, update these values to match your own.
 */

export const siteConfig = {
  // Basic site info
  name: "gauravnardia.com",
  title: "Gaurav Nardia",
  description:
    "Product designer, founder, and photographer. Building Peerlist and AutoSend.",
  url: "https://www.gauravnardia.com",

  // Author info
  author: {
    name: "Gaurav Nardia",
    handle: "@gaurav_nardia",
    email: "gauravnardia07@gmail.com",
    bio: "Product designer and founder building Peerlist and AutoSend. Over the past 15 years, I've focused on designing beautiful software that people love to use.",
    shortBio:
      "Product designer, founder, and photographer. Building Peerlist and AutoSend.",
  },

  // Social links
  social: {
    twitter: "https://x.com/gaurav_nardia",
    peerlist: "https://peerlist.io/gauravnardia",
    github: "https://github.com/GauravNardia",
  },

  // Featured projects/companies
  projects: { 
    bettervercel: "https://better-vercel.com",
    puffinanalytics: "https://puffinanalytics.com",
  },

  // Default images
  images: {
    profile: "/assets/profile.png",
    ogDefault: "/assets/og-images/og-home.jpg",
    ogWriting: "/assets/og-images/og-writing.png",
    ogFavorites: "/assets/og-images/og-favorites.png",
    ogPhotography: "/assets/og-images/og-photography.png",
    footerSignature: "/assets/footer-signature.png",
  },
};

// Helper to get full URL for images
export function getImageUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path}`;
}

// Helper to get canonical URL
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}
