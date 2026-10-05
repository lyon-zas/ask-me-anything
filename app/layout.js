import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

const description =
  "A live podcast session by Next Gen Africa where young Africans ask the questions that shape careers and lives. Saturday 17 October 2026. 40 seats.";

export const metadata = {
  title: "Ask Me Anything | Next Gen Africa",
  description,
  icons: { icon: "/logo-white.png" },
  openGraph: {
    type: "website",
    title: "Ask Me Anything | Next Gen Africa",
    description,
    images: ["/studio.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0c0c0e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
