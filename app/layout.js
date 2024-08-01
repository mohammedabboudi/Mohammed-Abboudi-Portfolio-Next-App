import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: {
    default: "Mohammed Abboudi | Full Stack Developer Portfolio",
    template:"%s | Mohammed Abboudi | Full Stack Developer Portfolio"
  },
  description: "Discover the portfolio of Mohammed Abboudi, an expert Full Stack Developer specializing in modern web technologies including HTML, CSS, JavaScript, React, Node.js, and more. Explore my projects, blog, and YouTube channel showcasing skills in front-end and back-end development, web design, and UI/UX design.",
  keywords: "Mohammed Abboudi, Full Stack Developer, Web Development, Front-end Development, Back-end Development, Web Design, UI/UX Design, HTML, CSS, SASS, LESS, JavaScript, TypeScript, PHP, React, Node.js, Express, DevOps, SEO Optimization, Tailwind CSS, Bootstrap, Next.js, Vue.js",
  author: "Mohammed Abboudi",
  publisher: "Mohammed Abboudi",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#0A0018",
  robots: "index, follow",
  canonical: "http://localhost:3000",
  locale: "en_US", // Specify the locale
  siteName: "Mohammed Abboudi Portfolio", // Specify the site name
  openGraph: {
    title: "Mohammed Abboudi | Full Stack Developer Portfolio",
    description: "Discover the portfolio of Mohammed Abboudi, an expert Full Stack Developer specializing in modern web technologies including HTML, CSS, JavaScript, React, Node.js, and more.",
    url: "http://localhost:3000",
    type: "website",
    locale: "en_US", // Specify the locale
    siteName: "Mohammed Abboudi Portfolio", // Specify the site name
    images: [
      {
        url: "http://localhost:3000/images/portfolio-thumbnail.png",
        width: 800,
        height: 600,
        alt: "Portfolio Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Abboudi | Full Stack Developer Portfolio",
    description: "Discover the portfolio of Mohammed Abboudi, an expert Full Stack Developer specializing in modern web technologies including HTML, CSS, JavaScript, React, Node.js, and more.",
    images: [
      {
        url: "http://localhost:3000/images/portfolio-thumbnail.png",
        width: 800,
        height: 600,
        alt: "Portfolio Thumbnail",
      },
    ],
    site: "@mohammedabboudi",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
